import React, {useEffect} from "react";
import LoginComponent from "../LoginComponent";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";
import CommentList from "./CommentList";
import {fetchAllUsers} from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";

const selectAllUsers = (state) => state.users;

const Profile = () => {
    let url = window.location.href
    let curUser;
    let user;
    if (url.includes("user=?")) {
        curUser = url.substring(url.indexOf("user=?") + 6, url.lastIndexOf("/"));
    }
    else {
        curUser = "";
    }
    user = url.substring(url.lastIndexOf("/") + 1)
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    useEffect(() => fetchAllUsers(dispatch), []);

    function getUserById(userId) {
        return users.find(user => {
            return userId === user.username
        })
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
                    <NavigationSidebar active='profile'/>
                </div>
                <div className="col-9">
                    <ProfileComponent user={getUserById(user)}/>
                    <br/>
                    <p className="text-center">Cards this user has commented on</p>
                    <CommentList userId={user}/>
                </div>
            </div>
        </>
    );
};
export default Profile;