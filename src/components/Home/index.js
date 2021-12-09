import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import LoginComponent from "../LoginComponent";
import IntroPanel from "./IntroPanel";
import CardListComponent from "../ListOfCardsComponent"

const Home = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-7 col-lg-9">

                </div>
                <div className="col-5 col-lg-3">
                    <LoginComponent/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2 m-1">
                    <NavigationSidebar active='home'/>
                </div>
                <div className="col-9"
                     style={{"position": "relative"}}>
                    <IntroPanel/>
                    <br></br>
                    <p className="text-center">Some Popularly Discussed Cards</p>
                    <CardListComponent/>
                </div>
            </div>
        </>
    );
};
export default Home;