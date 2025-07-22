function Profile({ title, subtitle, imageUrl, resumeUrl }) {
  return (
    <>
      <div>
        {`<img>`}
        <br />
        <br />
        <div className="profile-item profile-image-wrapper">
          <img src={imageUrl} alt="Profile photo" />
        </div>
        <br />
        {`</img>`}
      </div>

      <div>
        <div><span className='keyword'>public class</span> <span className='function'>INFORMATION</span>()</div>
        {`{`}
        <div className="tab"><span className='keyword'>public string</span> <span className='codeblock'>NAME</span> = <span className='string'>"{title}"</span>;</div>
        <div className="tab"><span className='keyword'>public string</span> <span className='codeblock'>TITLE</span> = <span className='string'>"{subtitle}"</span>;</div>
        {`}`}
      </div>

      <div>{`<button>`}<a className="anondecorated" href={resumeUrl} download target="_blank">Download Resume</a>{`</button>`}</div>
    </>
  );
}

export default Profile;