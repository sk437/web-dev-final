import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchAllUsers} from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";

const selectAllUsers = (state) => state.users;

const LoginComponent = ({
                            who = {
                                avatarIcon: '/images/anonymous.jpg',
                                userName: 'Guest'
                            }
                        }
) => {
    let url = window.location.href;
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

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);

    function getUserById(userId) {
        return users.find(user => {
            return userId === user.username
        })
    }

    let user;
    if (!(url === "")) {
        user = getUserById(url);
        if (!user) {
            url = ""
        }
    }
    const API_URL = 'http://localhost:4000/api';
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        })
    }

    return (
            <>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="text-center">
                            <img className="wd-profile-image"
                                 src={(url === "")? who.avatarIcon : user.profPic} alt=""/>
                            <br/>
                            <h5>{(url === "")? who.userName : user.username}</h5>
                        </div>

                        <hr/>
                        <div className="text-center">
                            {(url === "")? <>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                            </>:
                                <Link to={"/login"}><button className="btn btn-danger"
                                                            onClick={logout}>Logout</button></Link>}
                        </div>
                    </li>
                </ul>
            </>
        );
}
export default LoginComponent;