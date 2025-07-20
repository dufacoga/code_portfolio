function InfoMyProject({ title, imageUrl, description }) {
  return (
    <>
      <h3>{title}</h3>
      <img src={imageUrl} alt="Project Image" />
      <span>{description}</span>
    </>
  );
}

export default InfoMyProject;