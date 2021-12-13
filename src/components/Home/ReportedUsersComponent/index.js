import {React, useEffect} from "react";
import ReportedUserItem from "./ReportedUserItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../../../services/users-service"


const selectAllUsers = (state) => state.users;


const CommentList = () => {

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);

    return (
    <>
        <ul className="list-group">
        {
            users.filter(c => {return (c.reports > 0 && !c.isBanned)}).map(user => {
                return(<ReportedUserItem user={user}/>);
            })
        }
        </ul>
    </>
    )
}
export default CommentList;