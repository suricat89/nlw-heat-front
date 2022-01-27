import { config } from '../../config/default';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginBox } from '../LoginBox';
import _ from 'lodash';

test('Renders Login button link', () => {
  render(<LoginBox />);
  const loginButton = screen.getByText('Entrar com Github');

  const githubUrl = _.template(config.github.signInUrl)({
    clientId: config.github.clientId
  });

  expect(loginButton.getAttribute('href')).toBe(githubUrl);
});
