function InfoMyProject({ title, imageUrl, description }) {
  return (
    <>
    <div>
      {`<img>`}
      <br />
      <br />
      <img src={imageUrl} alt="Project Image" />
      <br />
      {`</img>`}
    </div>
    <div>
      <div><span className='keyword'>private void</span> <span className='function'>{title.replace(/\s+/g, '')}</span>()</div>
      {`{`}
      <div className="tab"><span className='keyword'>var</span> _Description = <span className="string text-break">"{description}"</span>;</div>
      {`}`}
    </div>
    <br />
    </>
  );
}

export default InfoMyProject;