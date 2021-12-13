import React, {useEffect, useState} from "react";
import CardListItem from "./CardListItemById";
import {fetchAllComments} from "../../services/comments-service";
import {useDispatch, useSelector} from "react-redux";

const selectAllComments = (state) => state.comments;

const CommentList = (userId = "Charles V") => {
    const comments = useSelector(selectAllComments);
    const dispatch = useDispatch();
    useEffect(() => fetchAllComments(dispatch), []);

    function isCommentForUser(comment) {
        return comment.username === userId.userId;
    }

    let cardsToDisplay = [];
    function getCards(item, index) {
        if (cardsToDisplay.filter(comment => comment.cardId === item.cardId).length > 0) {

        }
        else {
            cardsToDisplay.push(item)
        }
    }

    if (userId.userId.length > 0) {
        comments.filter(isCommentForUser).forEach(getCards)
    }
    else {
        comments.forEach(getCards)
    }

    return (
    <>
        <ul className="list-group">
        {
            cardsToDisplay.map(comment => {
                return(<CardListItem card={comment.cardId}/>);
            })
        }
        </ul>
    </>
    )
}
export default CommentList;