export default function ShelfItem({ href, title, count, description }) {
  return (
    <a className="card card-highlight card-shelf" href={href}>
      <div className="flex-space-between">
        <div className="card-title">{title}</div>
        {count !== undefined && (
          <div className="chip">
            <span className="chip-highlight">{count}</span>
          </div>
        )}
      </div>
      <p>{description}</p>
    </a>
  );
}
