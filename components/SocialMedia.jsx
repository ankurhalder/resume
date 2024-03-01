import PropTypes from "prop-types";

const SocialMedia = ({ socialMedia }) => {
  return (
    <div>
      {Object.keys(socialMedia).map((platform) => (
        <a
          key={platform}
          href={socialMedia[platform].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={socialMedia[platform].image} alt={platform} />
        </a>
      ))}
    </div>
  );
};

SocialMedia.propTypes = {
  socialMedia: PropTypes.objectOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialMedia;
