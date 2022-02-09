import MockAdapter from 'axios-mock-adapter';
import { environment } from '../../config/environment';
import { nlwHeatApiData } from '../__data__/services/nlwHeatApi.data';
import { api } from '../../services/nlw-heat-api';

const mock = new MockAdapter(api);

const urlWithGithubCode = 'http://suricat.com.br/?code=asdf';
const urlWithoutGithubCode = 'http://suricat.com.br/';

export const location = {
  href: urlWithGithubCode,
};

function setupInterceptors() {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: location,
  });
  Object.defineProperty(window, 'history', {
    value: {
      pushState: function (data: any, unused: string, url: string) {
        location.href = url;
      },
    },
  });
}

function clearInterceptors() {
  global.window.location.href = urlWithoutGithubCode;
  localStorage.removeItem('@dowhile:token');
  mock.reset();
}

function mockLocalStorageToken() {
  localStorage.setItem('@dowhile:token', 'test token');
}

function mockWindowURLWithGithubCode() {
  global.window.location.href = urlWithGithubCode;
}

function mockSuccessSignIn() {
  mock
    .onPost(environment.nlwHeatApi.signIn.path)
    .replyOnce(200, nlwHeatApiData.postUserAuthenticate.response.success);
}

function mockSuccessGetUserProfile() {
  mock
    .onGet(environment.nlwHeatApi.getUserProfile.path)
    .replyOnce(200, nlwHeatApiData.getUserProfile.response.success);
}

function mockSuccessSendMessage() {
  mock
    .onPost(environment.nlwHeatApi.sendMessage.path)
    .replyOnce(200, nlwHeatApiData.postMessage.response.success);
}

function mockErrorSendMessage() {
  mock.onPost(environment.nlwHeatApi.sendMessage.path).replyOnce(500);
}

export const authInterceptors = {
  setupInterceptors,
  clearInterceptors,
  mockLocalStorageToken,
  mockWindowURLWithGithubCode,
  mockSuccessSignIn,
  mockSuccessGetUserProfile,
  mockSuccessSendMessage,
  mockErrorSendMessage,
};
