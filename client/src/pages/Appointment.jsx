import { useState } from 'react';
import { apiRequest } from '../api/http';

const therapies = [
  'Pediatric Physiotherapy',
  'Occupational Therapy',
  'Speech Therapy',
  'DMI Therapy',
  'Special Education',
  'Sensory Integration Therapy',
  'Behavior Therapy',
];

export default function Appointment() {
  const [form, setForm] = useState({
    patientName: '',
    parentName: '',
    age: '',
    phone: '',
    email: '',
    therapy: therapies[0],
    preferredDate: '',
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      await apiRequest('/appointments', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setStatus('success');
      setMessage('Appointment request submitted. Our team will contact you soon.');
      setForm({ patientName: '', parentName: '', age: '', phone: '', email: '', therapy: therapies[0], preferredDate: '' });
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <section className="px-6 py-16 min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Book a visit</p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">Appointment</h1>
          <p className="text-slate-600 mt-4 leading-relaxed">Share your child and parent details. The request is saved in MongoDB and appears in the admin appointment queue.</p>
        </div>

        <form onSubmit={submit} className="bg-white border border-slate-200 rounded-lg p-6 grid md:grid-cols-2 gap-4 shadow-sm">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Child name<input name="patientName" value={form.patientName} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Parent name<input name="parentName" value={form.parentName} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Age<input name="age" type="number" min="0" value={form.age} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Phone<input name="phone" value={form.phone} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Email<input name="email" type="email" value={form.email} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Preferred date<input name="preferredDate" type="date" value={form.preferredDate} onChange={update} required className="border border-slate-300 rounded-lg px-3 py-3" /></label>
          <label className="md:col-span-2 grid gap-2 text-sm font-semibold text-slate-700">Therapy<select name="therapy" value={form.therapy} onChange={update} className="border border-slate-300 rounded-lg px-3 py-3">{therapies.map((therapy) => <option key={therapy}>{therapy}</option>)}</select></label>
          {message && <p className={`md:col-span-2 ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}>{message}</p>}
          <button disabled={status === 'loading'} className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">{status === 'loading' ? 'Submitting...' : 'Submit Appointment'}</button>
        </form>
      </div>
    </section>
  );
}
