import React from "react";
import "./home.styles.css"
import ImgRocket from "../../img/Rocket-by-andy-hermawan-bVBvv5xlX3g-unsplash_Background_Removed.png"
import LaunchList from "../../components/launchList/launchList";
import Header from "../header/header";

const Home = ()=> {
    return (
        <>
            <Header />
            <div className="layout">
                <div className="banner">
                    <div className="container-home">
                        <h1>Let's check the Rockets!</h1>
                        <p>Change your life to learn about SpaceX API!</p>
                        <a className="btn btn-flat" href="#">Login</a>
                    </div>
                    <div className="image-rocket">
                        <img src={ImgRocket} alt="Animated Image" id="animated-image" />
                    </div>
                </div>
            </div>
            <div className="layout">
                <LaunchList />
            </div></>
    )
};

export default Home;