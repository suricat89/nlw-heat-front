import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SendMessageForm } from '../SendMessageForm';
import { AuthProvider } from '../../contexts/auth';
import { sendMessageFormInterceptors } from '../__interceptors__/SendMessageForm.interceptor';
import { authInterceptors } from '../__interceptors__/Auth.interceptor';

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
  test('SSMF001 - Recognize github code and fetches User data from API', async () => {
    sendMessageFormInterceptors.SSMF001SetInterceptors();

    customRender(<SendMessageForm />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    expect(userName).toBeInTheDocument();
  });

  test(`SSMF002 - Uses localStorage token to fetch User data from API`, async () => {
    sendMessageFormInterceptors.SSMF002SetInterceptors();

    customRender(<SendMessageForm />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    expect(userName).toBeInTheDocument();
  });

  test(`SSMF003 - Send a message successfully`, async () => {
    sendMessageFormInterceptors.SSMF003SetInterceptors();

    customRender(<SendMessageForm />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, {
      target: { value: 'Test message' },
    });

    fireEvent.submit(screen.getByTestId('submitMessage'));

    await waitFor(() => textBox.textContent === '');

    expect(screen.getByRole('textbox').textContent).toBe('');
  });

  test(`SSMF004 - Tries to send a blank message`, async () => {
    sendMessageFormInterceptors.SSMF004SetInterceptors();

    customRender(<SendMessageForm />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, {
      target: { value: '' },
    });

    fireEvent.submit(screen.getByTestId('submitMessage'));

    await waitFor(() => textBox.textContent === '');

    expect(screen.getByRole('textbox').textContent).toBe('');
  });

  test('SSMF005 - SignOut successfully', async () => {
    sendMessageFormInterceptors.SSMF005SetInterceptors();

    customRender(<SendMessageForm />);
    let userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    expect(userName.textContent).toBe('Thiago Monteiro de Paula');

    fireEvent.click(screen.getByTestId('signOut'));
    userName = await screen.findByTestId('userName');

    expect(userName.textContent).toBe('');
  });
});

describe('Error scenarios', () => {
  test(`ESMF001 - Error trying to send message`, async () => {
    sendMessageFormInterceptors.ESMF001SetInterceptors();

    customRender(<SendMessageForm />);
    const userName = await screen.findByTestId('userName');
    await waitFor(() => userName.textContent !== '');

    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, {
      target: { value: 'Test error' },
    });

    fireEvent.submit(screen.getByTestId('submitMessage'));

    await waitFor(() => textBox.textContent === '');

    expect(screen.getByRole('textbox').textContent).toBe('');
  });
});
