function GroupCard({ title, link, linkHref = '', groupClass = '', children }) {
  return (
    <div className="groupcard">
      <div className="grouptitle">
        <h2>{title}</h2>
        <a href={linkHref} target="_blank">{link}</a>
      </div>

      <div className={`group ${groupClass}`}>
        {children}
      </div>
    </div>
  );
}

export default GroupCard;