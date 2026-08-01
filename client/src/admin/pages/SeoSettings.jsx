import { useState } from 'react';
import { useToast } from '../../context/ToastContext';

export default function SeoSettings() {
  const { notify } = useToast();
  const [seo, setSeo] = useState({ title: 'Child Therapy and Counselling Center', description: 'Evidence-informed child therapy, counselling and parent guidance.', keywords: 'child therapy, counselling, speech therapy', ogTitle: 'Child Therapy Center', ogImage: '' });
  return (
    <section className="panel form-panel wide-form">
      <div className="panel-heading"><h2>SEO Management</h2><span>Website meta and Open Graph settings</span></div>
      <div className="form-grid">
        <input value={seo.title} onChange={(event) => setSeo({ ...seo, title: event.target.value })} placeholder="Website meta title" />
        <input value={seo.keywords} onChange={(event) => setSeo({ ...seo, keywords: event.target.value })} placeholder="Keywords" />
        <textarea value={seo.description} onChange={(event) => setSeo({ ...seo, description: event.target.value })} placeholder="Meta description" />
        <input value={seo.ogTitle} onChange={(event) => setSeo({ ...seo, ogTitle: event.target.value })} placeholder="Open Graph title" />
        <input type="file" accept="image/*" />
        <button className="primary-btn" onClick={() => notify('SEO settings updated.')}>Update SEO Settings</button>
      </div>
    </section>
  );
}

