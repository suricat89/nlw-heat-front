import { authInterceptors } from './Auth.interceptor';
import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';

async function SSMF001SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
}

async function SSMF002SetInterceptors() {
  authInterceptors.mockLocalStorageToken();
  nlwHeatApiInterceptors.mockSuccessGetUserProfile();
}

async function SSMF003SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
  nlwHeatApiInterceptors.mockSuccessSendMessage();
}

async function SSMF004SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
}

async function SSMF005SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
}

async function ESMF001SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  nlwHeatApiInterceptors.mockSuccessSignIn();
  nlwHeatApiInterceptors.mockErrorSendMessage();
}

export const sendMessageFormInterceptors = {
  SSMF001SetInterceptors,
  SSMF002SetInterceptors,
  SSMF003SetInterceptors,
  SSMF004SetInterceptors,
  SSMF005SetInterceptors,
  ESMF001SetInterceptors,
};
