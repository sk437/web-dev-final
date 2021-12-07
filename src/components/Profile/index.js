import React from "react";
import LoginComponent from "../LoginComponent";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";

const Profile = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='profile'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            <ProfileComponent/>
            </div>
        </div>
    );
};
export default Profile;