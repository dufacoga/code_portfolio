function InfoGeneral({ date, title, description }) {
  return (
    <div className="containerinfogeneral">
      <i className="fas fa-circle fa-xs"></i>
      <div className="itemsinfogeneral">
        <span className="date">{date}</span>
        <h3 className="title">{title}</h3>
        <span className="description">{description}</span>
      </div>
    </div>
  );
}

export default InfoGeneral;