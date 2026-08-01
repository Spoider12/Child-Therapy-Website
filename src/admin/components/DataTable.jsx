export default function DataTable({ columns, rows, actions }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}{actions && <th>Actions</th>}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => <td key={column.key}>{column.render ? column.render(row) : row[column.key]}</td>)}
              {actions && <td className="table-actions">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <div className="empty-state">No records found.</div>}
    </div>
  );
}

