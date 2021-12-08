import React from "react";
import CardListItem from "../ListOfCardsComponent/CardListItem";
import Comments from "../comments"
import Cards from "../ListOfCardsComponent/cards"


const CommentList = (userId = "userid-1") => {
    function isCommentForUser(comment) {
        return comment.userId == userId.userId;
    };
    function getCardById(cardId) {
        return Cards.find(card => {return card.id == cardId})
    }
    return (
    <>
        <ul className="list-group">
        {
            Comments.filter(isCommentForUser).map(comment => {
                return(<CardListItem card={getCardById(comment.cardId)}/>);
            })
        }
        </ul>
    </>
    )
}
export default CommentList;