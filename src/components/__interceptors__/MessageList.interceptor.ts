import _ from 'lodash';
import MockAdapter from 'axios-mock-adapter';
import { environment } from '../../config/environment';
import { nlwHeatApiData } from '../__data__/services/nlwHeatApi.data';
import { api, socket } from '../../services/nlw-heat-api';
import { sleep } from '../../utils/utils';

const mock = new MockAdapter(api);

function getLastMessagesPath(ammountMessages: number) {
  return _.template(environment.nlwHeatApi.getLastMessages.path)({
    ammountMessages,
  });
}

function mockSuccessGetLastMessagesResponse(ammountMessages: number) {
  const path = getLastMessagesPath(ammountMessages);

  const response = nlwHeatApiData.getMessageLast.response.success;
  response.records = response.records.slice(0, ammountMessages);

  mock.onGet(path).reply(200, response);
}

function mockErrorGetLastMessagesResponse() {
  const { ammountMessages } = environment.pages.messageList;
  const path = getLastMessagesPath(ammountMessages);

  mock.onGet(path).reply(500);
}

async function mockSuccessSocketNewMessage(socketDelay: number) {
  jest.spyOn(socket, 'on').mockImplementation((event, callback) => {
    if (event === 'new_message') {
      const data = nlwHeatApiData.socketReceivedNewMessage.response.success;
      console.log(data);
      sleep(socketDelay).then(() => callback(data));
    }
    return socket;
  });
}

function SML001SetInterceptors(ammountMessages: number) {
  mockSuccessGetLastMessagesResponse(ammountMessages);
}

function SML002SetInterceptors(ammountMessages: number, socketDelay: number) {
  mockSuccessGetLastMessagesResponse(ammountMessages);
  mockSuccessSocketNewMessage(socketDelay);
}

function SML003SetInterceptors(ammountMessages: number) {
  mockSuccessGetLastMessagesResponse(ammountMessages);
}

function EML001SetInterceptors() {
  mockErrorGetLastMessagesResponse();
}

export const messageListInterceptors = {
  SML001SetInterceptors,
  SML002SetInterceptors,
  SML003SetInterceptors,
  EML001SetInterceptors,
};
