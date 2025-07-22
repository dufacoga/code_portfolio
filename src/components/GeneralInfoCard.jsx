function GeneralInfoCard({ title, children }) {
  return (
    <div>
      <div><span className='keyword'>public enum</span> <span className='function'>{title}</span>()</div>
      {`{`}
      <div className="tab text-break">{children}</div>
      {`}`}
    </div>
  );
}

export default GeneralInfoCard;