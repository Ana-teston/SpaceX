import React from "react";
import "./home.styles.css"
import ImgRocket from "../../img/Rocket-by-andy-hermawan-bVBvv5xlX3g-unsplash_Background_Removed.png"
import LaunchList from "../../components/launchList/launchList";
import Layout from "../../components/layout/layout";
import {useFetchUser} from "../../lib/authContext";

const Home = () => {
    const { user } = useFetchUser()
    return (
        <>
            <Layout user={user}>
                <div className="layout">
                    <div className="banner">
                        <div className="container-home">
                            <h1>Let's check the Rockets!</h1>
                            <p>Journey into the cosmos with SpaceX's engaging space exploration.</p>
                            <a className="btn btn-flat" href="https://www.spacex.com/" target="_blank" >SpaceX's</a>
                        </div>
                        <div className="image-rocket">
                            <img src={ImgRocket} alt="Animated Image" id="animated-image"/>
                        </div>
                    </div>
                </div>
                <div className="layout">
                    <LaunchList/>
                </div>
            </Layout>
        </>
    )
};

export default Home;