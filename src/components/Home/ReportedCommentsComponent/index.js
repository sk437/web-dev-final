import {React, useEffect} from "react";
import ReportedCommentItem from "./ReportedCommentItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllComments} from "../../../services/comments-service"


const selectAllComments = (state) => state.comments;


const CommentList = () => {

    const comments = useSelector(selectAllComments);
    const dispatch = useDispatch();
    useEffect(() => fetchAllComments(dispatch), []);

    console.log(comments)
    return (
    <>
        <ul className="list-group">
        {
            comments.filter(c => c.flags > 0).map(comment => {
                return(<ReportedCommentItem comment={comment}/>);
            })
        }
        </ul>
    </>
    )
}
export default CommentList;