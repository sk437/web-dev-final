import React from "react";
import {Link} from "react-router-dom";

const Banned = () => {
    const API_URL = 'http://localhost:4000/api';
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        })
    }
    return(<>
                <ul className="list-group mt-2">
                    <li className="list-group-item">
                        <div className="text-center">
                            <span className="text-danger">This account has been banned. Please logout to continue using the site</span>
                            <hr/>
                            <Link to={"/login"}><button className="btn btn-danger" onClick={logout}>Logout</button></Link>
                        </div>
                    </li>
                </ul>
           </>
    )
}

export default Banned;