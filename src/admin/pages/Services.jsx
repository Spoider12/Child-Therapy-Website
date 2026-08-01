import { useState } from 'react';
import DataTable from '../components/DataTable';
import Toolbar from '../components/Toolbar';
import StatusBadge from '../components/StatusBadge';
import { useToast } from '../../context/ToastContext';

export default function Services({ services, onCreate, onToggle, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', active: true });
  const rows = services.filter((service) => `${service.title} ${service.description}`.toLowerCase().includes(search.toLowerCase()));
  const save = async () => {
    if (!form.title || !form.description) return notify('Service title and description are required.', 'error');
    setSaving(true);
    try {
      await onCreate(form);
      setForm({ title: '', description: '', active: true });
      notify('Service added to MongoDB.');
    } catch (error) {
      notify(error.message, 'error');
    } finally {
      setSaving(false);
    }
  };
  const toggle = async (row) => {
    try { await onToggle(row); notify('Service status updated.'); } catch (error) { notify(error.message, 'error'); }
  };
  const remove = async (row) => {
    try { await onDelete(row); notify('Service deleted.'); } catch (error) { notify(error.message, 'error'); }
  };
  return (
    <div className="page-stack">
      <section className="panel form-panel">
        <div className="panel-heading"><h2>Add Service</h2><span>Saved directly to the backend API</span></div>
        <div className="form-grid">
          <input placeholder="Service title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          <textarea placeholder="Description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
          <button className="primary-btn" onClick={save} disabled={saving}>{saving ? 'Adding...' : 'Add Service'}</button>
        </div>
      </section>
      <section className="panel">
        <Toolbar search={search} onSearch={setSearch} />
        {loading && <div className="empty-state">Loading live services...</div>}
        <DataTable rows={rows} columns={[{ key: 'title', label: 'Service' }, { key: 'description', label: 'Description' }, { key: 'active', label: 'Status', render: (row) => <StatusBadge value={row.active ? 'Active' : 'Hidden'} /> }]} actions={(row) => <><button onClick={() => toggle(row)}>Toggle</button><button onClick={() => remove(row)}>Delete</button></>} />
      </section>
    </div>
  );
}