import { useState } from 'react';
import Toolbar from '../components/Toolbar';
import { useToast } from '../../context/ToastContext';

export default function Gallery({ gallery, setGallery, onDelete, loading }) {
  const { notify } = useToast();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const rows = gallery.filter((item) => `${item.title || ''} ${item.category || ''}`.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || item.category === category));

  const addPreview = (event) => {
    const files = Array.from(event.target.files || []);
    const previews = files.map((file) => ({ id: Date.now() + Math.random(), title: file.name, category: 'Uploads', image: URL.createObjectURL(file) }));
    setGallery((items) => [...previews, ...items]);
    if (files.length) notify(`${files.length} local preview${files.length > 1 ? 's' : ''} added. Use backend Cloudinary credentials for permanent uploads.`);
  };

  const remove = async (row) => {
    if (String(row.id).includes('.')) {
      setGallery((items) => items.filter((image) => image.id !== row.id));
      notify('Local preview removed.');
      return;
    }
    try {
      await onDelete(row);
      notify('Image deleted from MongoDB.');
    } catch (error) {
      notify(error.message, 'error');
    }
  };

  return (
    <div className="page-stack">
      <section className="upload-zone">
        <input id="galleryUpload" type="file" accept="image/*" multiple onChange={addPreview} />
        <label htmlFor="galleryUpload"><strong>Add gallery previews</strong><span>Existing gallery images below are loaded from MongoDB.</span></label>
      </section>
      <section className="panel">
        <Toolbar search={search} onSearch={setSearch} filter={category} onFilter={setCategory} filterOptions={['All', 'Clinic', 'Activities', 'Therapy', 'Uploads', 'General']} />
        {loading && <div className="empty-state">Loading live gallery...</div>}
        <div className="gallery-grid">
          {rows.map((item) => (
            <article className="image-card" key={item.id}>
              {item.image ? <img src={item.image} alt={item.title} /> : <div className="empty-state">No image</div>}
              <div><strong>{item.title || 'Untitled image'}</strong><span>{item.category}</span></div>
              <button onClick={() => remove(item)}>Delete</button>
            </article>
          ))}
        </div>
        {!rows.length && !loading && <div className="empty-state">No gallery images found.</div>}
      </section>
    </div>
  );
}