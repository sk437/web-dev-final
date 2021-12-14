import React from "react";
import CardListItem from "./CardListItem";

const CardList = (cards) => {
    return (
    <>
        <ul className="list-group">

        {(!cards.cards)? <h4 className="text-center">No results</h4> :
            cards.cards.slice(0, 20).map(card => {
                return(<CardListItem card={card}/>);
            })
        }
        </ul>
    </>
    )
}
export default CardList;