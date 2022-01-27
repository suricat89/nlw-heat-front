import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

import { Message } from '../../services/nlw-heat-api';
import * as nlwHeatApi from '../../services/nlw-heat-api';
import { config } from '../../config/default';

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesQueue: Message[] = [];

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) => {
          const { ammountMessages } = config.pages.messageList;
          const firstMessageQueue = messagesQueue.shift() as Message;

          const newMessageList = [firstMessageQueue];
          for (let i = 0; i < ammountMessages - 1; i++) {
            newMessageList.push(prevState[i]);
          }

          return newMessageList.filter(Boolean);
        });
      }
    }, config.pages.messageList.refreshQueueTime);
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      const { ammountMessages } = config.pages.messageList;
      const apiMessages = await nlwHeatApi.getLatestMessages(ammountMessages);
      if (apiMessages) {
        setMessages(apiMessages);
      }
    };

    const listenSocket = () => {
      nlwHeatApi.listenApi<Message>('new_message', (newMessage) => {
        messagesQueue.push(newMessage);
      });
    };

    getMessages();
    listenSocket();
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="NLW Heat" />
      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <li className={styles.message} key={message.id}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
