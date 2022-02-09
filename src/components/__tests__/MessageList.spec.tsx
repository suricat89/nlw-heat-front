import { environment } from '../../config/environment';
import { render, screen } from '@testing-library/react';
import { MessageList } from '../MessageList';
import { messageListInterceptors } from '../__interceptors__/MessageList.interceptor';

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

describe('Success scenarios', () => {
  test('SML001 - Renders messages list with 4 messages', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML001SetInterceptors(4);

    render(<MessageList />);

    const messages = await screen.findAllByRole('listitem');

    expect(messages.length).toBe(4);
  });

  test('SML002 - Updates the list if a new message is received', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML002SetInterceptors(4, 300);

    render(<MessageList />);

    const messagesBefore = await screen.findAllByRole('listitem');

    expect(messagesBefore.length).toBe(4);
    expect(messagesBefore[0]).toHaveTextContent('Message 5');

    await sleep(400);

    const messagesAfter = await screen.findAllByRole('listitem');
    expect(messagesAfter.length).toBe(4);
    expect(messagesAfter[0]).toHaveTextContent('New message from Socket');
  });

  test('SML003 - Checks for new messages on queue but there is nothing new', async () => {
    environment.pages.messageList.ammountMessages = 4;
    environment.pages.messageList.refreshQueueTime = 1;
    messageListInterceptors.SML003SetInterceptors(4);

    render(<MessageList />);

    const messagesBefore = await screen.findAllByRole('listitem');

    expect(messagesBefore.length).toBe(4);
    expect(messagesBefore[0]).toHaveTextContent('Message 5');

    await sleep(400);

    const messagesAfter = await screen.findAllByRole('listitem');
    expect(messagesAfter.length).toBe(4);
    expect(messagesAfter[0]).toHaveTextContent('Message 5');
  });
});

describe('Error scenarios', () => {
  test('EML001 - Display empty list if API request fails', async () => {
    environment.pages.messageList.ammountMessages = 4;
    messageListInterceptors.EML001SetInterceptors();

    render(<MessageList />);

    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
