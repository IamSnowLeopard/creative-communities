import React from "react";
import "./StickyCard.css";
import "../App.css";

const StickyCard = ({
  heading,
  subheading,
  content,
  showLearnMore,
  onLearnMoreClick,
}) => {
  const isListContent = heading === "03";
  const isExecutiveBoard = heading === "07";

  return (
    <div className="sticky-card-wrapper">
      <div className="sticky-card">
        <div className="sticky-card-content">
          <h2 className="sticky-card-heading">{heading}</h2>
          <h3 className="sticky-card-subheading">{subheading}</h3>
          <hr className="sticky-card-divider" />
          {isListContent ? (
            <ul className="sticky-card-list">
              {content.split(", ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : isExecutiveBoard ? (
            <div className="executive-board">
              {content.map((member, index) => (
                <div key={index} className="executive-member">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="executive-photo"
                  />
                  <div className="executive-details">
                    <p className="executive-name">{member.name}</p>
                    <p className="executive-title">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          )}
          {showLearnMore && (
            <button className="learn-more-button" onClick={onLearnMoreClick}>
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
