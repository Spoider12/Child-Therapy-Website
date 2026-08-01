export default function Toolbar({ search, onSearch, filter, onFilter, filterOptions = [], actionLabel, onAction }) {
  return (
    <div className="toolbar">
      <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search records" />
      {filterOptions.length > 0 && (
        <select value={filter} onChange={(event) => onFilter(event.target.value)}>
          {filterOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      )}
      {actionLabel && <button className="primary-btn" onClick={onAction}>{actionLabel}</button>}
    </div>
  );
}

