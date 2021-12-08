import React from "react";
import CardListItem from "./CardListItem";
import Cards from "./cards"

const CardList = () => {
    return (
    <>
        <ul className="list-group">
        {
            Cards.map(card => {
                return(<CardListItem card={card}/>);
            })
        }
        </ul>
    </>
    )
}
export default CardList;