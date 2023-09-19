import React from "react";
import "./card.styles.css"

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const Card = ({ launch }) => {
  return (
    <div className="launch-card">
      <img src={launch.flickr?.original?.[0] || (launch.links?.patch?.small)} alt="Launch" />
      <p>Rocket: {launch.name}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Date: {formatDate(launch.date_local)}</p>
      <p>Launch Status: {launch.success ? 'Success' : 'Failure'}</p>
      <p>Details: {launch.details}</p>
    </div>
  );
};

export default Card;
