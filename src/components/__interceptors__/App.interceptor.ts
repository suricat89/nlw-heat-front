import { environment } from '../../config/environment';
import { authInterceptors } from './Auth.interceptor';
import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';

function SA001SetInterceptors() {
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages,
  );
}

function SA002SetInterceptors() {
  nlwHeatApiInterceptors.mockSuccessGetLastMessagesResponse(
    environment.pages.messageList.ammountMessages,
  );
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
}

export const appInterceptors = {
  SA001SetInterceptors,
  SA002SetInterceptors,
};
