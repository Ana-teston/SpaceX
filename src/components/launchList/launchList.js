import React, { useState, useEffect } from 'react';
import { fetchSpaceXLaunches } from '../../api/spaceX';
import SectionCards from '../card/section';
import SearchBox from "../search/search";
import Launch from "../../routes/launch/launch";

function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLaunch, setSearchLaunch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpaceXLaunches();
        console.log(data);
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
  };

  const handleSearch = (value) => {
    setSearchLaunch(value);
  };

  // Filter launches based on the search input
  const filteredLaunches = launches.filter((launch) =>
      launch.name.toLowerCase().includes(searchLaunch.toLowerCase())
  );

  // Separate launches into three categories: success, failure, and future launches
  const successLaunches = launches.filter((launch) => launch.success);
  const failureLaunches = launches.filter((launch) => !launch.success);
  //const futureLaunches = launches.filter((launch) => launch.upcoming === true);

  return (
      <>
        <div className=" lg:justify-center lg:items-center mx-auto w-full  p-4 lg:p-16">
        <div className=" flex-grow mt-12 mb-5">
          <SearchBox
              placeholder="Search launches..."
              onSearch={handleSearch}
          />
          {searchLaunch.trim() !== '' ? (
              <Launch filteredLaunches={filteredLaunches} />
          ) : (
              null
          )}
        </div>
          <div className="flex-grow  mt-5 mb-5">
            <h3 className="text-2xl font-semibold mt-4  text-indigo-500">SuccessFull Launches</h3>
            <SectionCards launches={successLaunches} />

            <h3 className="text-2xl font-semibold mt-4  text-indigo-500">Failed Launches</h3>
            <SectionCards launches={failureLaunches} />

          </div>
        </div>
      </>
  )
}

export default LaunchList;
