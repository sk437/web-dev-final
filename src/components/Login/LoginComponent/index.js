import React from "react";

const LoginComponent = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
            <form>
                <label for="userName">Username: </label>
                <input type="text" class="form-control" id="userName" placeholder="Username"></input>
                <br></br>
                <label for="passWord">Password: </label>
                <input type="password" class="form-control" id="passWord"></input>
                <button class="btn btn-primary rounded-pill">Login</button>
            </form>
            </li>
        </ul>
    );
};
export default LoginComponent;