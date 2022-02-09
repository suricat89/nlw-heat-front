import { authInterceptors } from './Auth.interceptor';

async function SSMF001SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
}

async function SSMF002SetInterceptors() {
  authInterceptors.mockLocalStorageToken();
  authInterceptors.mockSuccessGetUserProfile();
}

async function SSMF003SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
  authInterceptors.mockSuccessSendMessage();
}

async function SSMF004SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
}

async function SSMF005SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
}

async function ESMF001SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
  authInterceptors.mockErrorSendMessage();
}

export const sendMessageFormInterceptors = {
  SSMF001SetInterceptors,
  SSMF002SetInterceptors,
  SSMF003SetInterceptors,
  SSMF004SetInterceptors,
  SSMF005SetInterceptors,
  ESMF001SetInterceptors,
};
