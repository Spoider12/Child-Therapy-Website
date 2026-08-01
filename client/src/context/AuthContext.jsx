import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../api/http';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    apiRequest('/admin/profile')
      .then(({ user }) => setSession({ user }))
      .catch(() => setSession(null))
      .finally(() => setCheckingAuth(false));
  }, []);

  const login = async ({ email, password }) => {
    if (!email || !password) throw new Error('Email and password are required.');
    const nextSession = await apiRequest('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setSession({ user: nextSession.user });
    return nextSession;
  };

  const logout = async () => {
    await apiRequest('/admin/logout', { method: 'POST' }).catch(() => null);
    setSession(null);
  };

  const value = useMemo(
    () => ({
      session,
      checkingAuth,
      login,
      logout,
      isAdmin: session?.user?.role === 'admin',
    }),
    [session, checkingAuth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
