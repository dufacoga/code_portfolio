function GroupCard({ title, link, linkHref, children }) {
  return (
    <div>
      {link ? (<><div className='comment'>///  <a className="anondecorated" href={linkHref} target="_blank">{link}: {linkHref}</a></div></>) : null}
      <div><span className='keyword'>public static class</span> <span className='function'>{title}</span>()</div>
      {`{`}
      <div className="tab">{children}</div>
      {`}`}
    </div>
  );
}

export default GroupCard;