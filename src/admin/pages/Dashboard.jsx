export default function Dashboard({ data }) {
  return (
    <div className="page-stack">
      <section className="stats-grid">
        {data.stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.trend}</small>
          </article>
        ))}
      </section>
      <section className="content-grid two-col">
        <article className="panel">
          <div className="panel-heading"><h2>Recent Activities</h2><span>Live audit feed</span></div>
          <ul className="activity-list">
            {data.activities.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </article>
        <article className="panel">
          <div className="panel-heading"><h2>Appointment Pipeline</h2><span>Current week</span></div>
          <div className="pipeline">
            {['Pending', 'Approved', 'Completed', 'Rejected'].map((status) => (
              <div key={status}><span>{status}</span><strong>{data.appointments.filter((item) => item.status === status).length}</strong></div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

