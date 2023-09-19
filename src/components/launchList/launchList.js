import React, { useState, useEffect } from 'react';
import { fetchSpaceXLaunches } from '../../api/spaceX';

function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpaceXLaunches();
        setLaunches(data);
      } catch (error) {
        // Handle error, e.g., display an error message
      }
    }

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Separate launches into three categories: success, failure, and future launches
  const successLaunches = launches.filter((launch) => launch.success);
  const failureLaunches = launches.filter((launch) => !launch.success);
  const futureLaunches = launches.filter((launch) => new Date(launch.date_local) > new Date());


  return (
    <div>
      <h1>SpaceX Launches</h1>

      <h2>Successfull Launches: </h2>
      <ul>
        {successLaunches.map((launch) => (
          <li key={launch.id}>
            <img src={launch.flickr?.original?.[0] ||
          (launch.links?.patch?.small)} alt="Launch" />
            <p>Rocket: {launch.name}</p>
            <p>Flight Number: {launch.flight_number} </p>
            <p>Date: {formatDate(launch.date_local)}</p>
            <p>Launch Status: {launch.success ? 'Success' : 'Failure'}</p>
            <p>Details: {launch.details}</p>
          </li>
        ))}
      </ul>

      <h2>Failure Launches: </h2>
      <ul>
        {failureLaunches.map((launch) => (
          <li key={launch.id}>
            <img src={launch.flickr?.original?.[0] ||
          (launch.links?.patch?.small)} alt="Launch" />
            <p>Rocket: {launch.name}</p>
            <p>Flight Number: {launch.flight_number} </p>
            <p>Date: {formatDate(launch.date_local)}</p>
            <p>Launch Status: {launch.success ? 'Success' : 'Failure'}</p>
            <p>Details: {launch.details}</p>
          </li>
        ))}
      </ul>

      <h2>Future Launches: </h2>
      <ul>
        {futureLaunches.map((launch) => (
          <li key={launch.id}>
            <img src={launch.flickr?.original?.[0] ||
          (launch.links?.patch?.small)} alt="Launch" />
            <p>Rocket: {launch.name}</p>
            <p>Flight Number: {launch.flight_number} </p>
            <p>Date: {formatDate(launch.date_local)}</p>
            <p>Launch Status: {launch.success ? 'Success' : 'Failure'}</p>
            <p>Details: {launch.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchList;
