function InfoPublication({ title, origin, author, description }) {
  return (
    <div>
      <div><span className='keyword'>private void</span> <span className='function'>Publication</span>()</div>
      {`{`}
      <div className="tab"><span className='keyword'>var</span> _Title = <span className="string text-break">"{title}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Origin = <span className="string text-break">"{origin}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Author = <span className="string text-break">"{author}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Description = <span className="string text-break">"{description}"</span>;</div>
      {`}`}
      <br />
      <br />
    </div>
  );
}

export default InfoPublication;