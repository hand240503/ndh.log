export default function SectionHeader({ title, icon, description, buttonLabel, buttonLink }) {
  return (
    <header className="heading ">
      <div className="heading-row">
        <h2>
          {icon && <img src={icon} alt="" className="heading-icon" />}
          <span>{title}</span>
        </h2>
        {buttonLabel && buttonLink && (
          <a className="button secondary small" href={buttonLink}>
            {buttonLabel}
          </a>
        )}
      </div>
      {description && <div className="description">{description}</div>}
    </header>
  );
}
