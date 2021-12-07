import React from "react";

const CardComponent = ({
                            card = {
                                img: "./oneWithNothing.jpg",
                                cardName: "One With Nothing",
                                cmc: "1",
                                cardType: "Instant",
                                cardText: "Discard your hand.",
                            }
}) => {
    const images = require.context('../../../../public/images', true)
    let curImage = images(card.img).default
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <img className="wd-card-image" src={curImage} alt=""/>
                <p>Name: {card.cardName}</p>
                <p>Converted Mana Cost: {card.cmc}</p>
                <p>Type: {card.cardType}</p>
                <p>Text: {card.cardText}</p>
            </li>
        </ul>
    );
};
export default CardComponent;