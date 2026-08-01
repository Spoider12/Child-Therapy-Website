import { useState } from 'react';
import DataTable from '../components/DataTable';
import Toolbar from '../components/Toolbar';
import StatusBadge from '../components/StatusBadge';
import { useToast } from '../../context/ToastContext';

export default function Appointments({ appointments, onUpdateStatus, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const rows = appointments.filter((item) => `${item.parent} ${item.child} ${item.therapy}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All' || item.status === filter));
  const updateStatus = async (row, status) => {
    try {
      await onUpdateStatus(row, status);
      notify(`Appointment marked ${status}.`);
    } catch (error) {
      notify(error.message, 'error');
    }
  };
  const remove = async (row) => {
    try { await onDelete(row); notify('Appointment deleted.'); } catch (error) { notify(error.message, 'error'); }
  };
  return (
    <section className="panel">
      <Toolbar search={search} onSearch={setSearch} filter={filter} onFilter={setFilter} filterOptions={['All', 'Pending', 'Approved', 'Rejected', 'Completed']} />
      {loading && <div className="empty-state">Loading live appointments...</div>}
      <DataTable rows={rows} columns={[{ key: 'parent', label: 'Parent' }, { key: 'child', label: 'Child' }, { key: 'phone', label: 'Phone' }, { key: 'email', label: 'Email' }, { key: 'therapy', label: 'Therapy' }, { key: 'date', label: 'Date' }, { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> }]} actions={(row) => <><button onClick={() => updateStatus(row, 'Approved')}>Approve</button><button onClick={() => updateStatus(row, 'Rejected')}>Reject</button><button onClick={() => updateStatus(row, 'Completed')}>Complete</button><button onClick={() => remove(row)}>Delete</button></>} />
    </section>
  );
}