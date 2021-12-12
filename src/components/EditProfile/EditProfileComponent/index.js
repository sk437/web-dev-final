import React, {useEffect, useState} from "react";
import MTGColor from "./MTGColor";
import {updateProfile} from "../../../services/users-service";
import {Link} from "react-router-dom";

let newPic = false;
let newBio = false;

const ProfileComponent = ({
                              def = {
                                  profPic: "/images/charlesV.jpg",
                                  username: "Charles V",
                                  favoriteColors: ["/images/mtgwhite.png", "/images/mtgblack.png"],
                                  bio: "Charles, by the grace of God, Holy Roman Emperor, forever August, King of Germany, King of Italy, King of all Spains, of Castile, Aragon, León, Navarra, Grenada, Toledo, Valencia, Galicia, Majorca, Sevilla, Cordova, Murcia, Jaén, Algarves, Algeciras, Gibraltar, the Canary Islands, King of Two Sicilies, of Sardinia, Corsica, King of Jerusalem, King of the Western and Eastern Indies, Lord of the Islands and Main Ocean Sea, Archduke of Austria, Duke of Burgundy, Brabant, Lorraine, Styria, Carinthia, Carniola, Limburg, Luxembourg, Gelderland, Neopatria, Württemberg, Landgrave of Alsace, Prince of Swabia, Asturia and Catalonia, Count of Flanders, Habsburg, Tyrol, Gorizia, Barcelona, Artois, Burgundy Palatine, Hainaut, Holland, Seeland, Ferrette, Kyburg, Namur, Roussillon, Cerdagne, Zutphen, Margrave of the Holy Roman Empire, Burgau, Oristano and Gociano, Lord of Frisia, the Wendish March, Pordenone, Biscay, Molin, Salins, Tripoli and Mechelen.",
                              }
                          }) => {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    const [user, setUser] = useState({});
    const API_URL = 'http://localhost:4000/api';
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                console.log(user);
                setUser(user);
            }).catch(res => {
            setUser("NONE");
        });
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
        console.log(colors);
        let fields = [bio, colors, pic];
        console.log(url);
        updateProfile(url, fields);
    };

    useEffect(getProfile, []);
    const [pic, setPic] = useState();
    const [col, setCol] = useState({
        green: false,
        blue: false,
        red: false,
        black: false,
        white: false
    })

    const [bio, setBio] = useState();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="text-center">
                    <img className="wd-profile-image-large" src={(newPic) ? pic : user.profPic} alt=""/>
                </div>
                <br/>
                <p className="text-primary text-center">Choose a new profile image:</p>
                <hr/>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="charles"
                           onClick={e => {
                               setPic('/images/charlesV.jpg');
                               newPic = true;
                           }}/>
                    <MTGColor c="./charlesV.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="tibalt"
                           onClick={e => {
                               setPic('/images/tibalt.jpg');
                               newPic = true
                           }}/>
                    <MTGColor c="./tibalt.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="nicolbolas"
                           onClick={e => {
                               setPic('/images/nicolbolas.jpg');
                               newPic = true
                           }}/>
                    <MTGColor c="./nicolbolas.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="liliana"
                           onClick={e => {
                               setPic('/images/liliana.jpg');
                               newPic = true
                           }}/>
                    <MTGColor c="./liliana.jpg"/>
                </label>

                <span className="ml-4"/>

                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="profimage" id="karn"
                           onClick={e => {
                               setPic('/images/karn.jpg');
                               newPic = true
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
                               onClick={e =>
                                   setCol({...col, white: !col.white})
                               }
                        />
                        <MTGColor c="./mtgwhite.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="blue"
                               onClick={e =>
                                   setCol({...col, blue: !col.blue})
                               }
                        />
                        <MTGColor c="./mtgblue.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="red"
                               onClick={e =>
                                   setCol({...col, red: !col.red})
                               }
                        />
                        <MTGColor c="./mtgred.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="black"
                               onClick={e =>
                                   setCol({...col, black: !col.black})
                               }
                        />
                        <MTGColor c="./mtgblack.png"/>
                    </label>

                    <span className="ml-4"/>

                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" id="green"
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
                          onChange={(e) => {
                              setBio(e.target.value);
                              newBio = true;
                          }}
                          defaultValue={user.bio}>
                        </textarea>
                <br/>
                <div className="text-center">
                    <Link to={`/profile/${user.username}`}>
                        <button className="btn btn-primary" onClick={updateProfileHandler}>
                            Save changes
                        </button>
                    </Link>
                </div>
            </li>
        </ul>
    );
};
export default ProfileComponent;