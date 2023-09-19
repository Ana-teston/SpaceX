import React from "react";
import "./card.styles.css"

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
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
    <h2>{launch.name}</h2>
    <small>Flight: {launch.flight_number}</small>
    <small className="date">  - {formatDate(launch.date_local)}</small>



    <p className="details">Details: {truncatedDetails}</p>
    <p className={`launch-status ${launch.success ? 'success' : 'failure'}`}>{launch.success ? 'Success' : 'Failure'}</p>
  </div>
</div>
  );
};

export default Card;
