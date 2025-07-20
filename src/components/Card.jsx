function Card({ groupClass = '', urlCard = '', children }) {
  const handleClick = () => {
    if (urlCard) {
      window.open(urlCard, '_blank');
    }
  };

  return (
    <div className={`card ${groupClass}`} onClick={handleClick} role={urlCard ? "link" : undefined} style={{ cursor: urlCard ? 'pointer' : 'default' }}>
      {children}
    </div>
  );
}

export default Card;