import React, {useEffect, useState} from "react";
import MTGColor from "./MTGColor";
import {Link} from "react-router-dom";
import {updateReport, updateBanned} from "../../../services/users-service"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllModerators, banUser, createNewModerator} from "../../../services/mods-service"

const selectAllModerators = (state) => state.moderators;


const ProfileComponent = ({
                            user = {
                                reports: 0,
                                designation: "moderator",
                                profPic: "/images/charlesV.jpg",
                                username: "Charles V",
                                favoriteColors: ["./mtgwhite.png", "./mtgblack.png"],
                                reportedBy: [],
                                bio: "Charles, by the grace of God, Holy Roman Emperor, forever August, King of Germany, King of Italy, King of all Spains, of Castile, Aragon, León, Navarra, Grenada, Toledo, Valencia, Galicia, Majorca, Sevilla, Cordova, Murcia, Jaén, Algarves, Algeciras, Gibraltar, the Canary Islands, King of Two Sicilies, of Sardinia, Corsica, King of Jerusalem, King of the Western and Eastern Indies, Lord of the Islands and Main Ocean Sea, Archduke of Austria, Duke of Burgundy, Brabant, Lorraine, Styria, Carinthia, Carniola, Limburg, Luxembourg, Gelderland, Neopatria, Württemberg, Landgrave of Alsace, Prince of Swabia, Asturia and Catalonia, Count of Flanders, Habsburg, Tyrol, Gorizia, Barcelona, Artois, Burgundy Palatine, Hainaut, Holland, Seeland, Ferrette, Kyburg, Namur, Roussillon, Cerdagne, Zutphen, Margrave of the Holy Roman Empire, Burgau, Oristano and Gociano, Lord of Frisia, the Wendish March, Pordenone, Biscay, Molin, Salins, Tripoli and Mechelen.",
                            }
}) => {
    let url = window.location.href;
    let curUser;
    if (url.includes("user=?")) {
        curUser = url.substring(url.indexOf("user=?") + 6, url.lastIndexOf("/"));
    }
    else {
        curUser = "";
    }

    const mods = useSelector(selectAllModerators);
    const dispatch = useDispatch();
    useEffect(() => fetchAllModerators(dispatch), []);

    function reportUser() {
        let flags = user.reports + 1;
        let reporter = curUser;
        let fields = [flags, reporter]
        updateReport(user.username, fields);
    }

    function banHammer() {
        updateBanned(dispatch, user.username, [true]);
        banUser(curUser, [user.username]);
    }

    function modUser() {
        createNewModerator(dispatch, [user.username])
    }
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <div className="text-center">
                <img className="wd-profile-image-large" src={user.profPic} alt=""/>
                <p>Name: {user.username}</p>
                {(mods.filter(m => m.username === user.username).length > 0)?
                <p className="text-center text-success">Moderator</p>
                :
                <></>
                }
                </div>
                {(user.isBanned)?
                <div className="text-center">
                    <span className="text-danger">This user has been banned</span>
                </div>:
                <>
                <div className="text-center">
                {user.favoriteColors.map(color => {return(<MTGColor c={color}/>);})}
                </div>
                <hr/>
                <p>Biography: {user.bio}</p>
                <br/>
                <div className="text-center">
                    {(curUser === "" || user.reportedBy.includes(curUser))?
                        <button className="btn btn-danger" disabled="disabled">Report Profile</button>:
                        (curUser === user.username)?
                            <Link to={`/edit-profile/user=?${user.username}/${user.username}`}
                                  className="btn btn-primary">Edit Profile</Link>:
                            (mods.filter(m => m.username === curUser).length > 0)?
                            (mods.filter(m => m.username === user.username).length > 0)?
                            <>
                            <button className="btn btn-primary" onClick={modUser} disabled="disabled">Mod User</button>
                            <button className="btn btn-danger" onClick={banHammer}>Ban User</button>
                            </>
                            :
                            <>
                            <button className="btn btn-primary" onClick={modUser}>Mod User</button>
                            <button className="btn btn-danger" onClick={banHammer}>Ban User</button>
                            </>
                            :
                            <Link to={`/reported/user=?${curUser}`}><button className="btn btn-danger" onClick={reportUser}>Report Profile</button></Link>
                    }
                </div>
                </>
                }
            </li>
        </ul>
    );
};
export default ProfileComponent;