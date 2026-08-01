import { useState } from 'react';
import DataTable from '../components/DataTable';
import Toolbar from '../components/Toolbar';
import StatusBadge from '../components/StatusBadge';
import { useToast } from '../../context/ToastContext';

export default function Contacts({ contacts, onToggleRead, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const rows = contacts.filter((item) => `${item.name} ${item.email} ${item.service || ''}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All' || (filter === 'Unread' ? !item.read : item.read)));
  const mark = async (row) => {
    try { await onToggleRead(row); notify('Contact state updated.'); } catch (error) { notify(error.message, 'error'); }
  };
  const remove = async (row) => {
    try { await onDelete(row); notify('Contact deleted.'); } catch (error) { notify(error.message, 'error'); }
  };
  return (
    <section className="panel">
      <Toolbar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} filterOptions={['All', 'Unread', 'Read']} />
      {loading && <div className="empty-state">Loading live contacts...</div>}
      <DataTable rows={rows} columns={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' }, { key: 'service', label: 'Service' }, { key: 'date', label: 'Date' }, { key: 'read', label: 'State', render: (row) => <StatusBadge value={row.read ? 'Read' : 'Unread'} /> }]} actions={(row) => <><button onClick={() => notify(row.message)}>Details</button><button onClick={() => mark(row)}>Mark</button><button onClick={() => remove(row)}>Delete</button></>} />
    </section>
  );
}