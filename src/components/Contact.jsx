function Contact({ children }) {
  return (
    <div>
      <div><span className='keyword'>public enum</span> <span className='function'>CONTACT</span>()</div>
      {`{`}
      {children}
      {`}`}
    </div>
  );
}

export default Contact;