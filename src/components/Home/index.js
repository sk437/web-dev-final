import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import LoginComponent from "../LoginComponent";
import IntroPanel from "./IntroPanel";


const Home = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='home'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            <IntroPanel/>
            </div>
        </div>
    );
};
export default Home;