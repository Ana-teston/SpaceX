import React, { useState, useEffect } from 'react';
import { fetchSpaceXLaunches } from '../../api/spaceX';
import SectionCards from '../card/section';

function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpaceXLaunches();
        setLaunches(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching SpaceX launches:', error);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Separate launches into three categories: success, failure, and future launches
  const successLaunches = launches.filter((launch) => launch.success);
  const failureLaunches = launches.filter((launch) => !launch.success);
  //const futureLaunches = launches.filter((launch) => launch.upcoming === true);

  return (
    <div className="sectionWrapper">
      <h3 className="title">Successfull Launches</h3>
      <SectionCards launches={successLaunches} />

      <h3 className="title">Failed Launches</h3>
      <SectionCards launches={failureLaunches} />

    </div>
  );
}

export default LaunchList;
