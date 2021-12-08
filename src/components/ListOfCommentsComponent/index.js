import React from "react";
import CommentListItem from "./CommentListItem";
import Comments from "../comments"


const CommentList = (cardId = "5a5841fa-4f30-495a-b840-3ef5a2af8fad") => {
    function isCommentForCard(comment) {
        return comment.cardId == cardId.c;
    };
    return (
    <>
        <ul className="list-group">
        <li className="list-group-item">
            <div className="form-group">
                <label className="form-text-label" for="postComment">Leave a comment on this card: </label>
                <textarea id="postComment" className="form-control" rows="3"></textarea>
            </div>
            <div className="text-center"><button className="btn btn-primary">Post</button></div>
        </li>
        {
            Comments.filter(isCommentForCard).map(comment => {
                return(<CommentListItem comment={comment}/>);
            })
        }
        </ul>
    </>
    )
}
export default CommentList;