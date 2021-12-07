import React from "react";
import LoginComponent from "../LoginComponent";
import CardComponent from "./CardComponent";
import NavigationSidebar from "../NavigationSidebar";

const Details = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='search'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            <CardComponent/>
            </div>
        </div>
    );
};
export default Details;