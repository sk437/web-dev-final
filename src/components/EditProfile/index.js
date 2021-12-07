import React from "react";
import LoginComponent from "../LoginComponent";
import EditProfileComponent from "./EditProfileComponent";
import NavigationSidebar from "../NavigationSidebar";


const EditProfile = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='profile'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            <EditProfileComponent/>
            </div>
        </div>
    );
};
export default EditProfile;