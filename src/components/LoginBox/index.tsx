import _ from 'lodash';
import { VscGithubInverted } from 'react-icons/vsc';
import { config } from '../../config/default';
import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl, clientId } = config.github;
  const url = _.template(signInUrl)({
    clientId
  });

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={url} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
}
