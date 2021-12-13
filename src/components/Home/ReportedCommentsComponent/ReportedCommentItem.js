import {React, useEffect} from "react"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../../../services/users-service";
import {deleteComment} from "../../../services/comments-service";

const selectAllUsers = (state) => state.users;

const CommentListItem = ({
                        comment = {
                            cardId: "5a5841fa-4f30-495a-b840-3ef5a2af8fad",
                            username: "Charles V",
                            body: "This is a comment about one with nothing",
                            flags: 0,
                        }
}) => {
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
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);

    let poster = users.find(user => {
        return user.username === comment.username}
    );

    let user = users.find(user => {
        return user.username === url;
    });

    function deleteHandler() {
        deleteComment(dispatch, comment);
    }
    return(
    <>
        <li className="list-group-item">
            <img className="wd-profile-image-comment mr-2" src={poster.profPic} alt=''/>
            <button className="btn btn-danger wd-float-right" onClick={deleteHandler}>Remove Comment</button>
            <span className="text-danger wd-float-right">Flags: {comment.flags}</span>
            <Link to={`/profile/user=?${url}/${poster.username}`}><h5>{poster.username}</h5></Link>
            <br/>
            <p className="wd-word-break">{comment.body}</p>
        </li>
    </>
    );
}
export default CommentListItem;