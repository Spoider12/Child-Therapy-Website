const paths = {
  dashboard: 'Dashboard',
  blogs: 'Blogs',
  testimonials: 'Testimonials',
  gallery: 'Gallery',
  contacts: 'Contacts',
  appointments: 'Appointments',
  seo: 'SEO',
  services: 'Services',
  settings: 'Settings',
};

const iconMap = {
  dashboard: 'M4 13h7V4H4v9Zm0 7h7v-5H4v5Zm9 0h7v-9h-7v9Zm0-11h7V4h-7v5Z',
  blogs: 'M5 4h14v16H5V4Zm3 4h8M8 12h8M8 16h5',
  testimonials: 'M5 6h14v9H8l-3 3V6Zm4 4h6',
  gallery: 'M4 5h16v14H4V5Zm3 10 3-4 3 3 2-2 3 3',
  contacts: 'M4 6h16v12H4V6Zm2 2 6 5 6-5',
  appointments: 'M7 3v3M17 3v3M4 8h16M6 12h4M6 16h7',
  seo: 'M4 12a8 8 0 1 1 15.5 2.7M12 8v4l3 2M4 20h7',
  services: 'M12 3 4 7v10h16V7l-8-4Zm-3 9h6',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3M12 18v3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M3 12h3M18 12h3M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1',
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      <path d={iconMap[name]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sidebar({ active, onNavigate, onClose }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">CT</div>
        <div>
          <strong>Child Therapy</strong>
          <span>Admin Console</span>
        </div>
      </div>
      <nav className="nav-list" aria-label="Admin navigation">
        {Object.entries(paths).map(([key, label]) => (
          <button key={key} className={active === key ? 'active' : ''} onClick={() => { onNavigate(key); onClose?.(); }}>
            <Icon name={key} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

