import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./routes/header/header";
import Home from "./routes/home/home";
import { fetchSpaceXLaunches } from "./api/spaceX";
import Launch from "./routes/launch/launch";


const App = () => {
    const [launches, setLaunches] = useState([]);

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

    return (
        <>
            <Routes>
                <Route path="/*" element={ <Header /> } />
                <Route path="/" element={<Home/>}/>
                <Route path="/launch" element={<Launch />} />
            </Routes>
        </>

    );
};

export default App;

