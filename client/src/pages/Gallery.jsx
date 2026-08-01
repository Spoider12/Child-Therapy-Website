const images = [
  { title: 'Therapy room', category: 'Clinic Space', src: '/NavBackground.png' },
  { title: 'Parent consultation', category: 'Care Team', src: '/ChatGPT Image Dec 7, 2025, 03_00_49 AM.png' },
  { title: 'Child development support', category: 'Programs', src: '/NewLogo2.png' },
];

export default function Gallery() {
  return (
    <section className="px-6 py-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Clinic moments</p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">Gallery</h1>
          <p className="text-slate-600 mt-3 max-w-2xl">A simple gallery route ready to be powered by the MongoDB and Cloudinary-backed admin upload flow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image) => (
            <article key={image.title} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
              <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <span className="text-sm text-blue-600 font-semibold">{image.category}</span>
                <h2 className="text-lg font-bold text-slate-900 mt-1">{image.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
