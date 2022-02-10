import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from '../../contexts/auth';
import { App } from '../../App';
import { appInterceptors } from '../__interceptors__/App.interceptor';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';
import { environment } from '../../config/environment';

const customRender = (...components: JSX.Element[]) =>
  render(
    <AuthProvider>
      {[...components.map((c, i) => ({ ...c, key: i }))]}
    </AuthProvider>,
  );

beforeAll(() => {
  authInterceptors.setupInterceptors();
  environment.pages.messageList.ammountMessages = 0;
});

beforeEach(() => {
  authInterceptors.clearInterceptors();
});

describe('Success scenarios', () => {
  test('SA001 - Renders App without user logged in', async () => {
    appInterceptors.SA001SetInterceptors();

    customRender(<App />);

    expect(screen.getByTestId('loginButton')).toBeInTheDocument();
  });

  test('SA001 - Reenders App with user logged in', async () => {
    appInterceptors.SA002SetInterceptors();

    customRender(<App />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    expect(screen.getByTestId('submitMessage')).toBeInTheDocument();
  });
});
