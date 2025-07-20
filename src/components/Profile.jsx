function Profile({ title, subtitle, imageUrl, resumeUrl }) {
  return (
    <>
      <div className="profile-item profile-image-wrapper">
        <img src={imageUrl} alt="Profile photo" />
      </div>

      <div className="profile-item profile-info">
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </div>

      <div className="profile-item profile-actions">
        <a className="download-button" href={resumeUrl} download target="_blank">Download Resume</a>
      </div>
    </>
  );
}

export default Profile;