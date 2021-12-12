import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const LoginComponent = ({
                            who = {
                                avatarIcon: '/images/anonymous.jpg',
                                userName: 'Guest'
                            }
                        }
) => {
    const [user, setUser] = useState({});
    const API_URL = 'http://localhost:4000/api';
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                console.log(user);
                setUser(user);
            }).catch(res => {
                setUser("NONE");
            });
    }
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        })
    }
    console.log(user);
    useEffect(getProfile, []);
    return (
            <>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="text-center">
                            <img className="wd-profile-image"
                                                          src={(user === "NONE")? who.avatarIcon : user.profPic} alt=""/>
                            <br/>
                            <h5>{(user === "NONE")? who.userName : user.username}</h5>
                        </div>

                        <hr/>
                        <div className="text-center">
                            {(user === "NONE")? <>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                            </>:
                                <Link to={"/login"}><button className="btn btn-danger" onClick={logout}>Logout</button></Link>}
                        </div>
                    </li>
                </ul>
            </>
        );
}
export default LoginComponent;