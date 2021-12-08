import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                                active = 'home'
                            }) => {
    return(
        <>
            <div className="list-group">
                <Link to="/home" className={`list-group-item ${active === 'home'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-home"></i><span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to="/search" className={`list-group-item ${active === 'search'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-search"></i><span className="d-none d-xl-inline"> Search</span>
                </Link>
                <Link to="/profile/userid-1" className={`list-group-item ${active === 'profile'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-user"></i><span className="d-none d-xl-inline"> Profile</span>
                </Link>
                <Link to="/privacy-policy" className={`list-group-item ${active === 'privacy-policy'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-lock"></i><span className="d-none d-xl-inline"> Privacy Policy</span>
                </Link>
            </div>
        </>
    );
}
export default NavigationSidebar;