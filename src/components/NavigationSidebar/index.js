import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                                active = 'home'
                            }) => {
    let url = window.location.href
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
    return(
        <>
            <div className="list-group">
                <Link to={`/home/user=?${url}`} className={`list-group-item ${active === 'home'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-home"/><span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to={`/search/user=?${url}`} className={`list-group-item ${active === 'search'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-search"/><span className="d-none d-xl-inline"> Search</span>
                </Link>
                <Link to={(url === '') ?
                     "/login" : `/profile/user=?${url}/${url}`
                }
                    className={`list-group-item ${active === 'profile'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-user"/><span className="d-none d-xl-inline"> Profile</span>
                </Link>
                <Link to={`/privacy-policy/user=?${url}`} className={`list-group-item ${active === 'privacy-policy'? 'active' : ""} list-group-item-action`}>
                    <i className="fas fa-lock"/><span className="d-none d-xl-inline"> Privacy Policy</span>
                </Link>
            </div>
        </>
    );
}
export default NavigationSidebar;