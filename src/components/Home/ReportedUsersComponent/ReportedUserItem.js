import {React, useEffect} from "react"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers, updateBanned} from "../../../services/users-service";
import {fetchAllModerators, banUser} from "../../../services/mods-service";


const selectAllUsers = (state) => state.users;
const selectAllModerators = (state) => state.moderators;

const CommentListItem = ({
                        user = {
                                reports: 0,
                                reportedBy: [],
                                isBanned: false,
                                profPic: '/images/anonymous.jpg',
                                username: '',
                                password: '',
                                favoriteColors: [],
                                bio: ''
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
    const moderators = useSelector(selectAllModerators);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);
    useEffect(() => fetchAllModerators(dispatch), []);

    let subject = users.find(u => {
        return u.username === user.username}
    );


    let moderator = moderators.find(u => {
        return u.username === url;
    })

    function banHammer() {
        updateBanned(dispatch, subject.username, [true]);
        banUser(moderator.username, [subject.username]);
    }
    return(
    <>
        <li className="list-group-item">
            <img className="wd-profile-image-comment mr-2" src={subject.profPic} alt=''/>
            <button className="btn btn-danger wd-float-right" onClick={banHammer}>Ban User</button>
            <span className="text-danger wd-float-right">Flags: {subject.reports}</span>
            <Link to={`/profile/user=?${url}/${subject.username}`}><h5>{subject.username}</h5></Link>
            <br/>
            <p className="wd-word-break">{subject.bio}</p>
        </li>
    </>
    );
}
export default CommentListItem;