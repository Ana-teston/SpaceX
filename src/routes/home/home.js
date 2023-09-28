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
                <div className="banner rounded-lg p-4 lg:p-16 ">
                    <div className="">
                        <h1 className="text-indigo-300 ">Let's check the Rockets!</h1>
                        <p>Journey into the cosmos with SpaceX's engaging space exploration.</p>
                        <a className="btn btn-flat " href="https://www.spacex.com/" target="_blank">SpaceX's</a>
                    </div>
                    <div className="image-rocket hidden md:block">
                        <img src={ImgRocket} alt="Animated Image" id="animated-image"/>
                    </div>
                </div>
                <LaunchList/>
            </Layout>
        </>
    )
};

export default Home;