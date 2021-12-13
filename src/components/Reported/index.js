import React from "react";
import NavigationSidebar from "../NavigationSidebar";


const Reported = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='home'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h5 className="text-center">Thank you for your report</h5>
                        <span className="text-center">Moderators will review the reported content shortly</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Reported;