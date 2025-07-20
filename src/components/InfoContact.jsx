function InfoContact({ title, subtitle, groupClass, subtitleUrl = '', subtitleUrltarget = '_self' }) {
  return (
    <>
      <div className="infocontacttitle">
        <i className={groupClass}></i>
        <h4>{title}</h4>
      </div>
      <a href={subtitleUrl} target={subtitleUrltarget}>{subtitle}</a>
    </>
  );
}

export default InfoContact;