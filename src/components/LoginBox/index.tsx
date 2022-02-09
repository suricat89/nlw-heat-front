import _ from 'lodash';
import { VscGithubInverted } from 'react-icons/vsc';
import { environment } from '../../config/environment';
import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl, clientId } = environment.github;
  const url = _.template(signInUrl)({
    clientId,
  });

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a
        href={url}
        className={styles.signInWithGithub}
        data-testid="loginButton"
      >
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
}
