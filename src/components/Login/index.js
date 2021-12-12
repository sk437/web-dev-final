import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import LoginComponent from "./LoginInput";

const Login = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='home'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            </div>
        </div>
    );
};
export default Login;