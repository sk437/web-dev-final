import React, {useEffect, useState} from "react";
import CommentListItem from "./CommentListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllComments, createNewComment} from "../../services/comments-service";

const selectAllComments = (state) => state.comments;

const CommentList = (cardId = "5a5841fa-4f30-495a-b840-3ef5a2af8fad") => {
    let url = window.location.href;
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
    const comments = useSelector(selectAllComments);
    const dispatch = useDispatch();
    useEffect(() => fetchAllComments(dispatch), []);

    const [post, setPost] = useState('');

    function postCommentHandler() {
        let fields = [url, cardId.c, post];
        createNewComment(dispatch, fields);
    }


    function isCommentForCard(comment) {
        return comment.cardId === cardId.c;
    }

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group">
                        <label className="form-text-label" for="postComment">Leave a comment on this card: </label>
                        <textarea id="postComment" className="form-control" rows="3"
                                  onChange={(e) => {
                                      setPost(e.target.value);
                                  }}/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary"
                                onClick={postCommentHandler}>Post</button>
                    </div>
                </li>
                {
                    comments.filter(isCommentForCard).map(comment => {
                        return(<CommentListItem comment={comment}/>);
                    })
                }
            </ul>
        </>
    )
}
export default CommentList;