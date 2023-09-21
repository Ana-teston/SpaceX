import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchSpaceXLaunches } from "./api/spaceX"
import Header from "./components/header/header";
import LaunchList from "./components/launchList/launchList";
import ResultsPage from "./components/resultsPage/resultsPage";
import Home from "./routes/home/home";

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [searchLaunch, setSearchLaunch] = useState("");
  const [showResultsPage, setShowResultsPage] = useState(false);

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
  setShowResultsPage(value.trim() !== "");
  };

  return (
  <>
  <Header onSearch={handleSearch} />
      {showResultsPage && (
        <ResultsPage filteredLaunches={launches.filter((launch) =>
          launch.name.toLowerCase().includes(searchLaunch.toLowerCase())
        )} />
      )}
    <div className="layout">
      <Home />
      <LaunchList />
    </div>
  </>
  );
  }

export default App;
