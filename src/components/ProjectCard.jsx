export default function ProjectCard({ year, title, repoLink, description, links }) {
  return (
    <div className="card">
      <time>{year}</time>
      <a href={repoLink} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p>{description}</p>
      {links && links.length > 0 && (
        <div className="card-links">
          {links.map((link, i) => (
            <a key={i} href={link.href} target={link.target || "_self"} rel={link.rel}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
