import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchAllUsers} from "../../../services/users-service"
import {useDispatch, useSelector} from "react-redux";

const selectAllUsers = (state) => state.users;

const RegisterComponent = () => {
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);
    const [user, setUser] = useState({
        username: '', password: '', profPic: '/images/anonymous.jpg',
        bio: "No Bio", isBanned: false, reports: 0
    });
    const register = () => {
        const API_URL = 'http://localhost:4000/api';
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };

    function isValidUsername(name) {
        return users.filter(u => u.username === name).length === 0;
    }

    return (
        <>
            <div className="text-center">
                <h4 className="text-warning">Please Read the Privacy Policy Before Registering an Account</h4>
                <Link to='privacy-policy/user=?'>
                    <button className="btn btn-primary">Privacy Policy</button>
                </Link>
            </div>
            <br/>
            <ul className="list-group">
                <li className="list-group-item">
                    <form>
                        <label>Enter Username:
                            <input type="username" className="form-control" id="userName" placeholder="Username"
                                   value={user.username}
                                   onChange={(e) => setUser({...user, username: e.target.value})}/>
                        </label>
                        <br/>
                        <label>Enter Password:
                            <input type="password" className="form-control" id="passWord" placeholder="Password"
                                   value={user.password}
                                   onChange={(e) => setUser({...user, password: e.target.value})}/>
                        </label>
                        <br/>
                        <label>Confirm Password:
                            <input type="password" className="form-control" id="confirmPassWord"
                                   placeholder="Retype Password"
                                   onChange={(e) => setUser({...user, match: e.target.value === user.password})}
                            />
                        </label>
                        <br/>
                        <div className="text-center">
                            {(!user.match || user.username.length === 0 || !isValidUsername(user.username) || user.username.includes(" ")) ? <>
                                    <button className="btn btn-primary rounded-pill"
                                            onClick={register} disabled="disabled">Register
                                    </button>
                                </> :
                                <Link to={`/edit-profile/user=?${user.username}/${user.username}`}>
                                    <button className="btn btn-primary rounded-pill"
                                            onClick={register}>Register
                                    </button>
                                </Link>}
                        </div>
                        <br/>
                        <div className="text-center">
                            <span className="text-warning">{(!user.match) ? "Passwords Do Not Match" : ""}</span>
                        </div>
                    </form>
                </li>
            </ul>
        </>
    );
};
export default RegisterComponent;