import React, { useState, useEffect } from 'react';
import { fetchSpaceXLaunches } from '../../api/spaceX';
import Card from '../card/card.component';

function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpaceXLaunches();
        setLaunches(data);
        setIsLoading(false); // Data has been loaded
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error('Error fetching SpaceX launches:', error);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  // Separate launches into three categories: success, failure, and future launches
  const successLaunches = launches.filter((launch) => launch.success);
  const failureLaunches = launches.filter((launch) => !launch.success);
  const futureLaunches = launches.filter((launch) => new Date(launch.date_local) > new Date());

  return (
    <div>
      <h1>SpaceX Launches</h1>

      <h2>Successful Launches: </h2>
      <ul>
        {successLaunches.map((launch) => (
          <li key={launch.id}>
            <Card launch={launch} />
          </li>
        ))}
      </ul>

      <h2>Failure Launches: </h2>
      <ul>
        {failureLaunches.map((launch) => (
          <li key={launch.id}>
            <Card launch={launch} />
          </li>
        ))}
      </ul>

      <h2>Future Launches: </h2>
      <ul>
        {futureLaunches.map((launch) => (
          <li key={launch.id}>
            <Card launch={launch} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchList;
