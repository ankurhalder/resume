import socialMedia from "../data/social";
function SocialMediaLinks() {
  return (
    <div className="social-media-links">
      <h2 className="section-title">Connect with me</h2>
      {Object.keys(socialMedia).map((platform, index) => (
        <div key={index} className="right-side">
          <a
            href={socialMedia[platform].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialMedia[platform].image}
              alt={platform}
              className="social-media-icon"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
