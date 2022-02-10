import _ from 'lodash';
import { environment } from '../../config/environment';
import { render, screen } from '@testing-library/react';
import { LoginBox } from '../LoginBox';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';
import { AuthProvider } from '../../contexts/auth';

const customRender = (...components: JSX.Element[]) =>
  render(
    <AuthProvider>
      {[...components.map((c, i) => ({ ...c, key: i }))]}
    </AuthProvider>,
  );

beforeAll(() => {
  authInterceptors.setupInterceptors();
});

beforeEach(() => {
  authInterceptors.clearInterceptors();
});

describe('Success scenarios', () => {
  test('SLB001 - Renders Login button link', () => {
    customRender(<LoginBox />);
    const loginButton = screen.getByText('Entrar com Github');

    const githubUrl = _.template(environment.github.signInUrl)({
      clientId: environment.github.clientId,
    });

    expect(loginButton.getAttribute('href')).toBe(githubUrl);
  });
});
