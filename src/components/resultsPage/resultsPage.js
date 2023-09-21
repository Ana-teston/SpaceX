import React from 'react';
import Card from '../card/card.component';
import "./resultsPage.styles.css"

const ResultsPage = ({ filteredLaunches }) => {
  return (
    <>
      <div className="layout">
        <h2 className="text-results">Rockets Results</h2>
          {filteredLaunches ? (
              <div className="filtered-results-section">
                  {filteredLaunches.map((launch) => (
                      <Card key={launch.id} launch={launch} />
                  ))}
              </div>
          ) : (
              <p>No data available</p>
          )}
      </div>
    </>
  );
};

export default ResultsPage;
