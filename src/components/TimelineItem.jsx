export default function TimelineItem({ dates, content, children }) {
  return (
    <li>
      <span className="era-dates">{dates}</span>
      {content ? (
        <span className="era-description" dangerouslySetInnerHTML={{ __html: content }}></span>
      ) : (
        <span className="era-description">{children}</span>
      )}
    </li>
  );
}
