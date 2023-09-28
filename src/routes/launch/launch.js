import React from "react";
import Xmark from "../../img/xmark.svg";
import Card from "../../components/card/card.component";


const Launch = ({ filteredLaunches }) => {
    return (
        <>
            <div className="mx-auto flex flex-wrap">
                <div className="flex-grow mt-8 mb-8">
                    <h3 className="text-2xl font-semibold mt-4 text-indigo-500">
                        Rockets Results
                    </h3>
                </div>
            </div>
            {filteredLaunches.length > 0 ? (
                <div className="flex flex-wrap mt-10 gap-4 mb-12">
                    {filteredLaunches.map((launch) => (
                        <Card key={launch.id} launch={launch} />
                    ))}
                </div>
            ) : (
                <div className="flex-grow mt-1 mb-5">
                    <p className="text-1xl font-light mb-12 text-indigo-300">
                        There is no launch found. Please try again ...
                    </p>
                </div>
            )}
        </>
    );
};


export default Launch;