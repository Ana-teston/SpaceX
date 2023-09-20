import React from "react";
import "./card.styles.css";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Card = ({ launch }) => {
  const truncatedDetails = launch.details ? launch.details.slice(0, 45) : 'No details about this launch.';

  const defaultImageUrl = 'https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80';

  const imageUrl = launch.links?.patch?.small || defaultImageUrl;

  return (
    <div className="launch-card">
      <div className="image-container">
        <img src={imageUrl} alt="Launch" />
      </div>
      <div className="launch-info">
        <h2>{launch.name}</h2>
        <small>Flight: {launch.flight_number}</small>
        <small className="date"> - {formatDate(launch.date_local)}</small>
        <p className="details">Details: {truncatedDetails}</p>
        <p className={`launch-status ${launch.success ? 'success' : 'failure'}`}>
          {launch.success ? 'Success' : 'Failure'}
        </p>
      </div>
    </div>
  );
};

export default Card;
