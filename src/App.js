import React, { useEffect, useState } from 'react';
import { fetchSpaceXLaunches } from './api/spaceX';
import SearchBox from './components/search/search';
import LaunchList from './components/launchList/launchList';

function App() {
  const [launches, setLaunches] = useState([]);
  const [searchLaunch, setSearchLaunch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpaceXLaunches();
        setLaunches(data);
      } catch (error) {
        console.error('Error fetching SpaceX launches:', error)
      }
    }
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchLaunch(value);
  };

  // Filter launches based on the searchLaunch
  const filteredLaunches = launches.filter((launch) =>
    launch.name.toLowerCase().includes(searchLaunch.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


  return (
    <>
      <SearchBox
        placeholder="Search Launches..."
        onChangeHandler={handleSearch}
      />
      {searchLaunch.trim() !== "" ? ( // Display filtered results only if there's a search
        <ul>
          {filteredLaunches.map((launch) => (
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
      ) : (
        <LaunchList /> // Display the LaunchList component when there's no search
      )}
    </>
  );
}


export default App;
