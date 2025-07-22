function InfoContact({ title, subtitle, end, subtitleUrl, subtitleUrltarget }) {
  return (
    <>
    <div className="tab"><span className='codeblock'>{title}{end}<div className="comment">///  <a className="anondecorated" href={subtitleUrl} target={subtitleUrltarget}>{subtitle}</a></div></span></div>
    </>
  );
}

export default InfoContact;