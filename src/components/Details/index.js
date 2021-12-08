import React from "react";
import LoginComponent from "../LoginComponent";
import CardComponent from "./CardComponent";
import NavigationSidebar from "../NavigationSidebar";
import CommentList from "../ListOfCommentsComponent";
import Cards from "../ListOfCardsComponent/cards";

const Details = () => {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    function getCardById(cardId) {
        return Cards.find(card => {return cardId == card.id})
    }
    return(
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='search'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
            <LoginComponent/>
            <CardComponent card={getCardById(url)}/>
            <br></br>
            <CommentList c={url}/>
            </div>
        </div>
    );
};
export default Details;