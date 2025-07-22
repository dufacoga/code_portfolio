function InfoGeneral({ startDate, endDate, title, description, type }) {
  return (
    <div>
      <div><span className='keyword'>public void</span> <span className='codeblock'>{description.replace(/\s+/g, '')}</span>()</div>
      {`{`}
      <div className="tab"><span className='keyword'>var</span> _Date = <span className="function text-xs">Range</span>
        (
          <div className="tab">
            {startDate ? (<><span className="text-xs">start:</span> {startDate},<br /></>) : null}
            <span className="text-xs">end:</span> {endDate}
          </div>
        )
      </div>
      <div className="tab"><span className='keyword'>var</span> _Position = <span className="string">"{title}"</span>;</div>
      {type ? (<><div className="tab"><span className='keyword'>var</span> _Type = <span className='keyword text-xs'>new</span> <span className='property'>{type}</span>;</div></>) : null}
      {`}`}
      <br />
      <br />
    </div>
  );
}

export default InfoGeneral;