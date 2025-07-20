function InfoGithubProject({ name, description, stars, forks, language }) {
  const getLanguageColor = (lang) => {
    switch (lang) {
      case "HTML":
        return "#e34c26";
      case "JavaScript":
        return "#f1e05a";
      case "TypeScript":
        return "#2b7489";
      case "C#":
        return "#178600";
      case "CSS":
        return "#563d7c";
      case "Kotlin":
        return "#a97bff";
      default:
        return "#cccccc";
    }
  };

  const languageColor = getLanguageColor(language);

  return (
    <div className="infogithubprojectcard">
      <div className="infogithubprojecttitle">
        <i className="fas fa-link"></i>
        <h3>{name}</h3>
      </div>

      <div className="infogithubprojectdescription">{description}</div>

      <div className="infogithubprojectdata">
        <div className="infogithubprojectitems">
          <div className="infogithubprojectstars">
            <i className="fas fa-star"></i>
            <span>{stars}</span>
          </div>
          <div className="infogithubprojectforks">
            <i className="fas fa-code-branch"></i>
            <span>{forks}</span>
          </div>
        </div>

        <div className="infogithubprojectlenguaje">
          <i style={{ color: languageColor }}>●</i>
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoGithubProject;