import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import RegisterComponent from "./RegisterComponent";

const Register = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='home'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <RegisterComponent/>
            </div>
        </div>
    );
};
export default Register;