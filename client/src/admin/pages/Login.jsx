import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkingAuth, isAdmin, login } = useAuth();
  const [form, setForm] = useState({ email: 'admin@childtherapy.local', password: 'admin123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!checkingAuth && isAdmin) {
    return <Navigate to={location.state?.from?.pathname || '/admin/dashboard'} replace />;
  }

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(form);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-screen">
      <section className="login-panel">
        <div className="login-copy">
          <p className="eyebrow">Secure admin access</p>
          <h1>Child Therapy Admin Dashboard</h1>
          <p>Manage blogs, appointments, gallery media, testimonials, service pages, SEO, and clinic settings from one responsive workspace.</p>
        </div>
        <form className="login-card" onSubmit={submit}>
          <div className="brand-mark large">CT</div>
          <label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
          <label>Password<input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /></label>
          {error && <p className="form-error">{error}</p>}
          <button className="primary-btn" disabled={loading}>{loading ? 'Signing in...' : 'Login as Admin'}</button>
        </form>
      </section>
    </main>
  );
}
