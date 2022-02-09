import { authInterceptors } from './Auth.interceptor';

function SA002SetInterceptors() {
  authInterceptors.mockWindowURLWithGithubCode();
  authInterceptors.mockSuccessSignIn();
}

export const appInterceptors = {
  SA002SetInterceptors,
};
