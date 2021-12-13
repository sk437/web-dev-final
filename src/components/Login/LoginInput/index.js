import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetchAllUsers} from "../../../services/users-service";
import {useDispatch, useSelector} from "react-redux";

const selectAllUsers = (state) => state.users;

const LoginComponent = () => {

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);
    const [user, setUser] = useState({username: "", password: ""});
    const login = () => {
        const API_URL = 'http://localhost:4000/api';
        fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    function isValidUsername(name) {
        return users.filter(u => u.username === name).length === 0;
    }
    function isMatchingLoginCredentials(name, password) {
        return users.filter(u => u.username === name && u.password === password).length > 0;
    }
    return(
        <ul className="list-group">
            <li className="list-group-item">
            <form>
                <label>Username:
                <input type="text" className="form-control" id="userName" placeholder="Username"
                       value={user.username}
                       onChange={(e) => {
                           setUser({...user, username: e.target.value});
                       }
                       }/>
                </label>
                <br/>
                <label>Password:
                <input type="password" className="form-control" id="passWord" placeholder="Password"
                       value={user.password}
                       onChange={(e) => {
                           setUser({...user, password: e.target.value});
                       }}/>
                </label>
                <br/>
                <div className="text-center">
                    {(user.username.length === 0 || isValidUsername(user.username)
                        || !isMatchingLoginCredentials(user.username, user.password))?
                        <>
                            <button className="btn btn-primary rounded-pill"
                                             onClick={login} disabled="disabled">Login</button>
                            <br/>
                            <span className="text-danger">Invalid username or password</span>
                        </> :
                        <>
                            <Link to={`/home/user=?${user.username}`}><button className="btn btn-primary rounded-pill"
                                                     onClick={login}>Login</button></Link>
                        </>}
                        </div>
            </form>
            </li>
        </ul>
    );
};
export default LoginComponent;