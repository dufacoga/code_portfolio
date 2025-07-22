function InfoMyArticle({ title, time, imageUrl, description, children }) {
  return (
    <>
    <div>
      {`<img>`}
      <br />
      <br />
      <img src={imageUrl} alt="Article visual" />
      <br />
      {`</img>`}
    </div>
    <div>
      <div><span className='keyword'>private void</span> <span className='function'>Article</span>(<span className='keyword'>string</span>[] _HashTags)</div>
      {`{`}
      <div className="tab"><span className='keyword'>var</span> _Title = <span className="string text-break">"{title}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Time = <span className="string text-break">"{time}"</span>;</div>
      <div className="tab"><span className='keyword'>var</span> _Description = <span className="string text-break">"{description}"</span>;</div>
      <div className="tab"><span className='summary'>_HashTags</span> = {`{`}{children}{`}`};</div>
      {`}`}
    </div>
    </>
  );
}

export default InfoMyArticle;