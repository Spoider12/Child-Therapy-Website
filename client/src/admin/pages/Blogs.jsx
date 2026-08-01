import { useState } from 'react';
import DataTable from '../components/DataTable';
import Toolbar from '../components/Toolbar';
import StatusBadge from '../components/StatusBadge';
import { useToast } from '../../context/ToastContext';

export default function Blogs({ blogs, onCreate, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'Parenting', status: 'Draft', content: '' });
  const rows = blogs.filter((blog) => `${blog.title} ${blog.category}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All' || blog.status === filter));

  const save = async () => {
    if (!form.title.trim()) return notify('Blog title is required.', 'error');
    setSaving(true);
    try {
      await onCreate(form);
      setForm({ title: '', category: 'Parenting', status: 'Draft', content: '' });
      notify('Blog created in MongoDB.');
    } catch (error) {
      notify(error.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row) => {
    try {
      await onDelete(row);
      notify('Blog deleted from MongoDB.');
    } catch (error) {
      notify(error.message, 'error');
    }
  };

  return (
    <div className="page-stack">
      <section className="panel form-panel">
        <div className="panel-heading"><h2>Create Blog</h2><span>Saved directly to the backend API</span></div>
        <div className="form-grid">
          <input placeholder="Blog title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option>Parenting</option><option>Therapy</option><option>Wellness</option></select>
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option>Draft</option><option>Published</option></select>
          <textarea placeholder="Blog content" value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} />
          <button className="primary-btn" onClick={save} disabled={saving}>{saving ? 'Creating...' : 'Create Blog'}</button>
        </div>
      </section>
      <section className="panel">
        <Toolbar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} filterOptions={['All', 'Published', 'Draft']} />
        {loading && <div className="empty-state">Loading live blogs...</div>}
        <DataTable columns={[{ key: 'title', label: 'Title' }, { key: 'category', label: 'Category' }, { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> }, { key: 'date', label: 'Date' }]} rows={rows} actions={(row) => <><button onClick={() => notify(`Editing ${row.title}`)}>Edit</button><button onClick={() => remove(row)}>Delete</button></>} />
      </section>
    </div>
  );
}