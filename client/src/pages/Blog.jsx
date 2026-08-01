const posts = [
  {
    title: 'How early therapy supports developmental milestones',
    category: 'Parent Guide',
    description: 'A practical overview of when to seek support and what families can expect during therapy planning.',
  },
  {
    title: 'Making home routines easier for sensory needs',
    category: 'Occupational Therapy',
    description: 'Simple structure, visual cues, and regulation strategies that help children feel safer at home.',
  },
  {
    title: 'Speech therapy signs parents should notice',
    category: 'Speech Therapy',
    description: 'Common communication delays and how assessment turns concern into a clear support plan.',
  },
];

export default function Blog() {
  return (
    <section className="px-6 py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Parent resources</p>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">Blogs</h1>
          <p className="text-slate-600 mt-3 max-w-2xl">Helpful therapy education, clinic updates, and parent-friendly guidance from Active Learning CDC.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <span className="text-sm font-semibold text-blue-600">{post.category}</span>
              <h2 className="text-xl font-bold text-slate-900 mt-3">{post.title}</h2>
              <p className="text-slate-600 mt-3 leading-relaxed">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
