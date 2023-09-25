import React, { useState, useEffect } from 'react';
import { fetchSpaceXLaunches } from '../../api/spaceX';
import SectionCards from '../card/section';
import SearchBox from "../search/search";
import Card from "../card/card.component";
import Xmark from "../../img/xmark.svg";
import Layout from "../layout/layout";

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
        <div className="sectionWrapper mx-4">
          <SearchBox
              placeholder="Search launches..."
              onSearch={handleSearch}
          />
          {searchLaunch.trim() !== '' && filteredLaunches.length > 0 ? (
              <div className="filtered-results-section">
                {filteredLaunches.map((launch) => (
                    <Card key={launch.id} launch={launch} />
                ))} <a href="/">
                <img src={Xmark} alt="back to home" className="X-close" />
              </a>
              </div>

          ) : (
              ""
          )}
        </div>
          <div className="sectionWrapper mt-5">
            <h3 className="title">Successfull Launches</h3>
            <SectionCards launches={successLaunches} />

            <h3 className="title">Failed Launches</h3>
            <SectionCards launches={failureLaunches} />

          </div>
      </>
  )
}

export default LaunchList;
