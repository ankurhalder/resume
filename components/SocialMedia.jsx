import socialMedia from "../data/social"; // Adjust the path as per your project structure

// Component for displaying social media links
function SocialMediaLinks() {
  return (
    <div className="social-media-links">
      {Object.keys(socialMedia).map((platform, index) => (
        <a
          key={index}
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
      ))}
    </div>
  );
}

export default SocialMediaLinks;
