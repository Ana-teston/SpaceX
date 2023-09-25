import React from 'react';
import Card from '../../components/card/card.component';
import "./resultsPage.styles.css";
import Xmark from "../../img/xmark.svg";
import Layout from "../../components/layout/layout";

const ResultsPage = ({ filteredLaunches }) => {
  return (
    <>
        <Layout>
            <div className="layout mx-auto">
                <div className="rocket-result mx-auto mx-2">
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
                    <div className="filtered-results-section mx-auto">
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
        </Layout>
    </>
  );
};

export default ResultsPage;
