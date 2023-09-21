import React from 'react';
import Card from '../card/card.component';
import "./resultsPage.styles.css";
import Xmark from "../../img/xmark.svg";

const ResultsPage = ({ filteredLaunches }) => {
  return (
    <>
      <div className="layout">
        <div className="rocket-result">
            <div>
                <h3 className="text-results">Rockets Results</h3>
            </div>
            <div>
                <a href="/">
                    <img src={Xmark} alt="back to home" className="X-close" />
                </a>
            </div>
        </div>
          {filteredLaunches ? (
              <div className="filtered-results-section">
                  {filteredLaunches.map((launch) => (
                      <Card key={launch.id} launch={launch} />
                  ))}
              </div>
          ) : (
              <div className="filtered-results-section">
                  <p className="no-found">No data available</p>
              </div>
          )}
      </div>
    </>
  );
};

export default ResultsPage;
