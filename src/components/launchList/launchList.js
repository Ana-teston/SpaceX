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

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            <img src={launch.links.patch.small} alt="Launch Patch" />
            <p>Rocket: {launch.rocket}</p>
            <p>Launch Status: {launch.success ? 'Success' : 'Failure'}</p>
            <p>Details: {launch.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchList;
