import React from "react";
import {Link} from "react-router-dom";
import SearchComponent from "./SearchComponent";
import NavigationSidebar from "../NavigationSidebar";
import LoginComponent from "../LoginComponent";
import CardListComponent from "../ListOfCardsComponent";

const Search = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-7 col-lg-9">

                </div>
                <div className="col-5 col-lg-3">
                    <LoginComponent/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2 m-1">
                    <NavigationSidebar active='search'/>
                </div>
                <div className="col-9">
                    <SearchComponent/>
                    <br/>
                </div>
            </div>
        </>
    );
};
export default Search;