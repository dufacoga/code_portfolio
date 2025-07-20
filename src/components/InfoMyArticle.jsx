function InfoMyArticle({ title, time, imageUrl, description, children }) {
  return (
    <>
      <img src={imageUrl} alt="Article visual" />

      <div className="infomyarticlecontainer">
        <div className="infomyarticlecontent">
          <h4>{title}</h4>
          <span>{time}</span>
        </div>

        <span>{description}</span>

        <div className="infomyarticlehashtags">
          {children}
        </div>
      </div>
    </>
  );
}

export default InfoMyArticle;