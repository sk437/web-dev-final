import React from "react"
import {Link} from "react-router-dom";
import Users from "../users.json";

const CommentListItem = ({
                        comment = {
                            cardId: "5a5841fa-4f30-495a-b840-3ef5a2af8fad",
                            username: "Charles V",
                            body: "This is a comment about one with nothing",
                            flags: 0,
                        }
}) => {
    const images = require.context('../../../public/images', true)
    let poster = Users.find(user => {return user.username == comment.username})
    let curImage = images(poster.profPic).default
    return(
    <>
        <li className="list-group-item">
            <img className="wd-profile-image-comment mr-2" src={curImage}></img>
            <button className="btn btn-danger btn-sm wd-float-right">Report</button>
            <Link to={`/profile/${poster.username}`}><h5>{poster.username}</h5></Link>
            <span>{comment.body}</span>
        </li>
    </>
    );
}
export default CommentListItem;