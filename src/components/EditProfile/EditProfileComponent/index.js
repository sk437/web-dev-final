import React, {useEffect, useState} from "react";
import MTGColor from "./MTGColor";
import {fetchAllUsers, updateProfile} from "../../../services/users-service";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const selectAllUsers = (state) => state.users;


const ProfileComponent = ({
                              def = {
                                  profPic: "/images/charlesV.jpg",
                                  username: "Charles V",
                                  favoriteColors: ["/images/mtgwhite.png", "/images/mtgblack.png"],
                                  bio: "Charles, by the grace of God, Holy Roman Emperor, forever August, King of Germany, King of Italy, King of all Spains, of Castile, Aragon, León, Navarra, Grenada, Toledo, Valencia, Galicia, Majorca, Sevilla, Cordova, Murcia, Jaén, Algarves, Algeciras, Gibraltar, the Canary Islands, King of Two Sicilies, of Sardinia, Corsica, King of Jerusalem, King of the Western and Eastern Indies, Lord of the Islands and Main Ocean Sea, Archduke of Austria, Duke of Burgundy, Brabant, Lorraine, Styria, Carinthia, Carniola, Limburg, Luxembourg, Gelderland, Neopatria, Württemberg, Landgrave of Alsace, Prince of Swabia, Asturia and Catalonia, Count of Flanders, Habsburg, Tyrol, Gorizia, Barcelona, Artois, Burgundy Palatine, Hainaut, Holland, Seeland, Ferrette, Kyburg, Namur, Roussillon, Cerdagne, Zutphen, Margrave of the Holy Roman Empire, Burgau, Oristano and Gociano, Lord of Frisia, the Wendish March, Pordenone, Biscay, Molin, Salins, Tripoli and Mechelen.",
                              }
                          }) => {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    useEffect(() => fetchAllUsers(dispatch), []);

    console.log(users);

    function getUserById(userId) {
        return users.find(user => {
            return userId === user.username
        })
    }

    let user;
    if (!(url === "")) {
        user = getUserById(url);
        if(!user) {
            url = ""
        }
    }
    function updateProfileHandler(user) {
        let colors = [];
        if (col.green) {
            colors.push("/images/mtggreen.png");
        }
        if (col.blue) {
            colors.push("/images/mtgblue.png");
        }
        if (col.black) {
            colors.push("/images/mtgblack.png");
        }
        if (col.red) {
            colors.push("/images/mtgred.png");
        }
        if (col.white) {
            colors.push("/images/mtgwhite.png");
        }
        let fields = [bio, colors, pic];
        updateProfile(url, fields)
    }

    if (!user) {
        user = {profPic: "/images/anonymous.jpg", bio:"No Bio", favoriteColors: []}
    }
    const [pic, setPic] = useState(user.profPic);
    const [col, setCol] = useState({
        green: user.favoriteColors.includes('/images/mtggreen.png'),
        blue: user.favoriteColors.includes('/images/mtgblue.png'),
        red: user.favoriteColors.includes('/images/mtgred.png'),
        black: user.favoriteColors.includes('/images/mtgblack.png'),
        white: user.favoriteColors.includes('/images/mtgwhite.png')
    })

    const [bio, setBio] = useState(user.bio);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="text-center">
                    <img className="wd-profile-image-large" src={pic} alt=""/>
                </div>
                <br/>
                <p className="text-primary text-center">Choose a new profile image:</p>
                <hr/>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="charles"
                           defaultChecked={(pic === '/images/charlesV.jpg')? 'checked': ''}
                           onClick={e => {
                               setPic('/images/charlesV.jpg');
                           }}/>
                    <MTGColor c="./charlesV.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="tibalt"
                           defaultChecked={(pic === '/images/tibalt.jpg')? 'checked': ''}
                           onClick={e => {
                               setPic('/images/tibalt.jpg');
                           }}/>
                    <MTGColor c="./tibalt.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="nicolbolas"
                           defaultChecked={(pic === '/images/nicolbolas.jpg')? 'checked': ''}
                           onClick={e => {
                               setPic('/images/nicolbolas.jpg');
                           }}/>
                    <MTGColor c="./nicolbolas.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="liliana"
                           defaultChecked={(pic === '/images/liliana.jpg')? 'checked': ''}
                           onClick={e => {
                               setPic('/images/liliana.jpg');
                           }}/>
                    <MTGColor c="./liliana.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="karn"
                           defaultChecked={(pic === '/images/karn.jpg')? 'checked': ''}
                           onClick={e => {
                               setPic('/images/karn.jpg');
                           }}/>
                    <MTGColor c="./karn.jpg"/>
                </label>
                <br/>
                <br/>
                <p className="text-primary text-center">Change Favorite Colors: </p>
                <hr/>

                <form>
                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input " type="checkbox" id="white"
                               defaultChecked={(col.white === true)? 'checked': ''}
                               onClick={e =>
                                   setCol({...col, white: !col.white})
                               }
                        />
                        <MTGColor c="./mtgwhite.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="blue"
                               defaultChecked={(col.blue === true)? 'checked': ''}
                               onClick={e =>
                                   setCol({...col, blue: !col.blue})
                               }
                        />
                        <MTGColor c="./mtgblue.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="red"
                               defaultChecked={(col.red === true)? 'checked': ''}
                               onClick={e =>
                                   setCol({...col, red: !col.red})
                               }
                        />
                        <MTGColor c="./mtgred.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="black"
                               defaultChecked={(col.black === true)? 'checked': ''}
                               onClick={e =>
                                   setCol({...col, black: !col.black})
                               }
                        />
                        <MTGColor c="./mtgblack.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="green"
                               defaultChecked={(col.green === true)? 'checked': ''}
                               onClick={e =>
                                   setCol({...col, green: !col.green})
                               }
                        />
                        <MTGColor c="./mtggreen.png"/>
                    </label>
                </form>
                <br/>
                <label for="editProfile">Edit Bio</label>
                <textarea className="form-control wd-max-width" id="editProfile" rows="15"
                          placeholder="Bio"
                          onChange={(e) => {
                              setBio(e.target.value);
                          }}
                          defaultValue={bio}>
                        </textarea>
                <br/>
                <div className="text-center">
                    <Link to={`/profile/user=?${url}/${url}`}>
                        <button className="btn btn-primary" onClick={
                            updateProfileHandler
                        }>
                            Save changes
                        </button>
                    </Link>
                </div>
            </li>
        </ul>
    );
};
export default ProfileComponent;