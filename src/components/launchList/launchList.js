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


  const currentDate = new Date();
  // Separate launches into three categories: success, failure, and future launches
  const successLaunches = launches.filter((launch) => launch.success);
  const failureLaunches = launches.filter((launch) => !launch.success);
  const futureLaunches = launches.filter((launch) => launch.upcoming === true);


  return (
    <div className="sectionWrapper">
      <SectionCards title="Successful Launches" launches={successLaunches} size="small" />
      <SectionCards title="Failed Launches" launches={failureLaunches} size="small" />
      <SectionCards title="Future Launches" launches={futureLaunches} size="small" />
    </div>
  );
}

export default LaunchList;
