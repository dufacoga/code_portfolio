function InfoPublication({ title, origin, author, description }) {
  return (
    <>
      <h3>{title}</h3>
      <span>{origin}</span>
      <span>{author}</span>
      <p>{description}</p>
    </>
  );
}

export default InfoPublication;