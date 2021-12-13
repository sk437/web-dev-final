import React from "react";
import CardListItem from "./CardListItem";

const CardList = (cards) => {
    console.log("cards")
    console.log(cards);
    return (
    <>
        <ul className="list-group">
        {
            cards.cards.slice(0, 20).map(card => {
                console.log(card);
                return(<CardListItem card={card}/>);
            })
        }
        </ul>
    </>
    )
}
export default CardList;