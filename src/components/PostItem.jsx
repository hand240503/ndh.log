export default function PostItem({ href, title, date, tags, isDetailed, thumbnail, description }) {
  return (
    <a className={`post ${isDetailed ? 'detailed' : ''}`} href={href}>
      {thumbnail && (
        <div className="post-thumbnail">
          <img src={thumbnail} alt="" />
        </div>
      )}
      <div className="post-info">
        <div className="post-title">
          <div>{title}</div>
        </div>
        {date && <time>{date}</time>}
        {description && <p className="post-description">{description}</p>}
      </div>
      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}
