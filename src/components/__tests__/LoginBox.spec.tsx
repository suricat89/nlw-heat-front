import { environment } from '../../config/environment';
import { render, screen } from '@testing-library/react';
import { LoginBox } from '../LoginBox';
import _ from 'lodash';

describe('Success scenarios', () => {
  test('SLB001 - Renders Login button link', () => {
    render(<LoginBox />);
    const loginButton = screen.getByText('Entrar com Github');

    const githubUrl = _.template(environment.github.signInUrl)({
      clientId: environment.github.clientId
    });

    expect(loginButton.getAttribute('href')).toBe(githubUrl);
  });
});
