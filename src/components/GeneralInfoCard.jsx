function GeneralInfoCard({ title, groupClass = '', children }) {
  return (
    <div className={groupClass}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
}

export default GeneralInfoCard;