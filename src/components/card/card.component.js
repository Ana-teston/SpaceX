import React from "react";
import "./card.styles.css"

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const Card = ({ launch }) => {
  const truncatedDetails = launch.details ? launch.details.slice(0, 50) : 'No details about this launch.';

  return (
    <div className="launch-card">
  <div className="image-container">
    <img src={launch.links?.patch?.small} alt="Launch" />
  </div>
  <div className="launch-info">
    <h2>Rocket: {launch.name}</h2>
    <small className="date">Date: {formatDate(launch.date_local)}</small>
    <p>Flight Number: {launch.flight_number}</p>

    <p className={`launch-status ${launch.success ? 'success' : 'failure'}`}>{launch.success ? 'Success' : 'Failure'}</p>
    <span className="details">Details: {truncatedDetails}</span>
  </div>
</div>
  );
};

export default Card;
