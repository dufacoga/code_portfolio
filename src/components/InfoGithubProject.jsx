function InfoGithubProject({ name, description, stars, forks, language, link, linkHref }) {
  const getLanguageColor = (lang) => {
    switch (lang) {
      case "HTML":
        return "#e34c26";
      case "JavaScript":
        return "#e47d08ff";
      case "TypeScript":
        return "#2b7489";
      case "C#":
        return "#178600";
      case "CSS":
        return "#9169ceff";
      case "Kotlin":
        return "#cbb3f8ff";
      default:
        return "#cccccc";
    }
  };

  const languageColor = getLanguageColor(language);

  return (
    <>
    <div>
      {link ? (<><div className='comment'>///  <a className="anondecorated" href={linkHref} target="_blank">{link}: {linkHref}</a></div></>) : null}
      <div><span className='keyword'>private void</span> <span className='function'>{name.replace(/\s+/g, '')}</span>()</div>
      {`{`}
      <div className="tab"><span className='keyword'>var</span> _Description = <span className="string text-break">"{description}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Stars = <span className="string text-break">"{stars}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Forks = <span className="string text-break">"{forks}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Language = <span className="string text-break">"<i style={{ color: languageColor }}>●</i> {language}"</span>;</div>
      {`}`}
    </div>
    <br />
    </>
  );
}

export default InfoGithubProject;