import { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function Layout({ active, onNavigate, title, children }) {
  const [open, setOpen] = useState(false);
  const { session, logout } = useAuth();

  return (
    <div className="app-shell">
      <div className={`mobile-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <div className={`sidebar-wrap ${open ? 'show' : ''}`}>
        <Sidebar active={active} onNavigate={onNavigate} onClose={() => setOpen(false)} />
      </div>
      <main className="main-area">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setOpen(true)} aria-label="Open menu">?</button>
          <div>
            <p className="eyebrow">Admin workspace</p>
            <h1>{title}</h1>
          </div>
          <div className="profile-chip">
            <span>{session?.user?.name}</span>
            <button onClick={logout}>Logout</button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

