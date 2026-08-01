import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function Settings() {
  const { notify } = useToast();
  const [settings, setSettings] = useState({ phone: '+91 98765 43210', email: 'hello@childtherapy.local', address: 'Clinic Road, Bengaluru', instagram: '', facebook: '', smtpHost: '', smtpUser: '' });
  const update = (key, value) => setSettings({ ...settings, [key]: value });
  return (
    <section className="panel form-panel wide-form">
      <div className="panel-heading"><h2>Website Settings</h2><span>Logo, contact information, socials and email delivery</span></div>
      <div className="form-grid">
        <input type="file" accept="image/*" />
        <input value={settings.phone} onChange={(event) => update('phone', event.target.value)} placeholder="Contact phone" />
        <input value={settings.email} onChange={(event) => update('email', event.target.value)} placeholder="Contact email" />
        <input value={settings.address} onChange={(event) => update('address', event.target.value)} placeholder="Address" />
        <input value={settings.instagram} onChange={(event) => update('instagram', event.target.value)} placeholder="Instagram URL" />
        <input value={settings.facebook} onChange={(event) => update('facebook', event.target.value)} placeholder="Facebook URL" />
        <input value={settings.smtpHost} onChange={(event) => update('smtpHost', event.target.value)} placeholder="SMTP host" />
        <input value={settings.smtpUser} onChange={(event) => update('smtpUser', event.target.value)} placeholder="SMTP user" />
        <button className="primary-btn" onClick={() => notify('Settings saved.')}>Save Settings</button>
      </div>
    </section>
  );
}

