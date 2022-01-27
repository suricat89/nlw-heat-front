import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from '../services/nlw-heat-api';
import * as nlwHeatApi from '../services/nlw-heat-api';

interface AuthContextData {
  user: User | null;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProvider {
  children: ReactNode;
}

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(githubCode: string) {
    const response = await nlwHeatApi.signIn(githubCode);

    const { token, user } = response;
    localStorage.setItem('@dowhile:token', token);
    nlwHeatApi.api.defaults.headers.common.authorization = `Bearer ${token}`;
    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  }

  useEffect(() => {
    async function getUserProfile() {
      const profile = await nlwHeatApi.getUserProfile();
      setUser(profile);
    }

    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      nlwHeatApi.api.defaults.headers.common.authorization = `Bearer ${token}`;
      getUserProfile();
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
