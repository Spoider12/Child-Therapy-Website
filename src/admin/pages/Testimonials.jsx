import { useState } from 'react';
import DataTable from '../components/DataTable';
import Toolbar from '../components/Toolbar';
import StatusBadge from '../components/StatusBadge';
import { useToast } from '../../context/ToastContext';

export default function Testimonials({ testimonials, onCreate, onToggle, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: '', rating: 5, review: '', visible: true });
  const rows = testimonials.filter((item) => `${item.name} ${item.review}`.toLowerCase().includes(search.toLowerCase()));

  const save = async () => {
    if (!form.name || !form.review) return notify('Client name and review are required.', 'error');
    setSaving(true);
    try {
      await onCreate(form);
      setForm({ name: '', rating: 5, review: '', visible: true });
      notify('Testimonial added to MongoDB.');
    } catch (error) {
      notify(error.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const toggle = async (row) => {
    try { await onToggle(row); notify('Visibility updated.'); } catch (error) { notify(error.message, 'error'); }
  };
  const remove = async (row) => {
    try { await onDelete(row); notify('Testimonial deleted.'); } catch (error) { notify(error.message, 'error'); }
  };

  return (
    <div className="page-stack">
      <section className="panel form-panel">
        <div className="panel-heading"><h2>Add Testimonial</h2><span>Saved directly to the backend API</span></div>
        <div className="form-grid">
          <input placeholder="Client name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          <select value={form.rating} onChange={(event) => setForm({ ...form, rating: event.target.value })}>{[1, 2, 3, 4, 5].map((rating) => <option key={rating}>{rating}</option>)}</select>
          <label className="inline-check"><input type="checkbox" checked={form.visible} onChange={(event) => setForm({ ...form, visible: event.target.checked })} /> Show testimonial</label>
          <textarea placeholder="Review text" value={form.review} onChange={(event) => setForm({ ...form, review: event.target.value })} />
          <button className="primary-btn" onClick={save} disabled={saving}>{saving ? 'Adding...' : 'Add Testimonial'}</button>
        </div>
      </section>
      <section className="panel">
        <Toolbar search={search} onSearch={setSearch} />
        {loading && <div className="empty-state">Loading live testimonials...</div>}
        <DataTable rows={rows} columns={[{ key: 'name', label: 'Client' }, { key: 'rating', label: 'Rating', render: (row) => `${row.rating}/5` }, { key: 'review', label: 'Review' }, { key: 'visible', label: 'Visibility', render: (row) => <StatusBadge value={row.visible ? 'Visible' : 'Hidden'} /> }]} actions={(row) => <><button onClick={() => toggle(row)}>Toggle</button><button onClick={() => remove(row)}>Delete</button></>} />
      </section>
    </div>
  );
}