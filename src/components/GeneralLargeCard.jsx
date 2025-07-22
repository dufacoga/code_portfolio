function GeneralLargeCard({ title, children }) {
  return (
    <div>
      <div><span className='keyword'>public static class</span> <span className='function'>{title}</span>()</div>
      {`{`}
      <div className="tab text-break">{children}</div>
      {`}`}
    </div>
  );
}

export default GeneralLargeCard;