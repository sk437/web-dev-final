import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import LoginComponent from "../LoginComponent";
import IntroPanel from "./IntroPanel";
import CardListComponent from "../Profile/CommentList"

const Home = () => {
    let url = window.location.href
    if (url.includes("user=?")) {
        if (url.lastIndexOf("/") < url.indexOf("user=?")){
            url = url.substring(url.indexOf("user=?") + 6);
        }
        else {
            url = url.substring(url.indexOf("user=?") + 6, url.lastIndexOf("/"));
        }
    }
    else {
        url = "";
    }
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
                    <br/>
                    {(url === "")?
                    <p className="text-center">Some Popularly Discussed Cards</p> :
                        <p className="text-center">Cards You Have Commented On Recently</p>}
                    <CardListComponent userId={url}/>
                </div>
            </div>
        </>
    );
};
export default Home;