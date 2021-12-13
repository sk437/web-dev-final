import React, {useEffect} from "react"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../../services/users-service";

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
    console.log(comment)
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);

    let poster = users.find(user => {
        return user.username === comment.username}
    );

    return(
    <>
        <li className="list-group-item">
            <img className="wd-profile-image-comment mr-2" src={poster.profPic} alt=''/>
            <button className="btn btn-danger btn-sm wd-float-right">Report</button>
            <Link to={`/profile/user=?${url}/${poster.username}`}><h5>{poster.username}</h5></Link>
            <span>{comment.body}</span>
        </li>
    </>
    );
}
export default CommentListItem;