import { nlwHeatApiInterceptors } from './nlwHeatApi.interceptor';

const urlWithGithubCode = 'http://suricat.com.br/?code=asdf';
const urlWithoutGithubCode = 'http://suricat.com.br/';

export const location = {
  href: urlWithoutGithubCode,
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
  nlwHeatApiInterceptors.resetMock();
}

function mockLocalStorageToken() {
  localStorage.setItem('@dowhile:token', 'test token');
}

function mockWindowURLWithGithubCode() {
  global.window.location.href = urlWithGithubCode;
}

export const authInterceptors = {
  setupInterceptors,
  clearInterceptors,
  mockLocalStorageToken,
  mockWindowURLWithGithubCode,
};
