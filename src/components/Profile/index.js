import React from "react";
import LoginComponent from "../LoginComponent";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";
import CommentList from "./CommentList";
import Users from "../users"

const Profile = () => {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    function getUserById(userId) {
        return Users.find(user => {return userId == user.userId})
    }
    console.log(getUserById(url))
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='profile'/>
            </div>
            <div className="col-9">
            <LoginComponent/>
            <ProfileComponent user={getUserById(url)}/>
            <br></br>
            <p className="text-center">Cards this user has commented on</p>
            <CommentList userId={url}/>
            </div>
        </div>
    );
};
export default Profile;