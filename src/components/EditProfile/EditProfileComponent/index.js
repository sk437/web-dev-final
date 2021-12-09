import React from "react";
import MTGColor from "./MTGColor";

const ProfileComponent = ({
                            user = {
                                profPic: "./charlesV.jpg",
                                username: "Charles V",
                                favoriteColors: ["./mtgwhite.png", "./mtgblack.png"],
                                bio: "Charles, by the grace of God, Holy Roman Emperor, forever August, King of Germany, King of Italy, King of all Spains, of Castile, Aragon, León, Navarra, Grenada, Toledo, Valencia, Galicia, Majorca, Sevilla, Cordova, Murcia, Jaén, Algarves, Algeciras, Gibraltar, the Canary Islands, King of Two Sicilies, of Sardinia, Corsica, King of Jerusalem, King of the Western and Eastern Indies, Lord of the Islands and Main Ocean Sea, Archduke of Austria, Duke of Burgundy, Brabant, Lorraine, Styria, Carinthia, Carniola, Limburg, Luxembourg, Gelderland, Neopatria, Württemberg, Landgrave of Alsace, Prince of Swabia, Asturia and Catalonia, Count of Flanders, Habsburg, Tyrol, Gorizia, Barcelona, Artois, Burgundy Palatine, Hainaut, Holland, Seeland, Ferrette, Kyburg, Namur, Roussillon, Cerdagne, Zutphen, Margrave of the Holy Roman Empire, Burgau, Oristano and Gociano, Lord of Frisia, the Wendish March, Pordenone, Biscay, Molin, Salins, Tripoli and Mechelen.",
                            }
}) => {
    const images = require.context('../../../../public/images', true)
    let curProfPic = images(user.profPic).default
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <div className="text-center">
                <img className="wd-profile-image-large" src={curProfPic} alt=""/>
                </div>
                <br></br>
                <p className="text-primary text-center">Choose a new profile image:</p>
                <hr></hr>
                <span className="ml-4"></span>
                <input className="form-check-input" type="radio" name="profimage" id="tibalt"></input>
                <label className="form-check-label" for="tibalt">
                    <MTGColor c="./tibalt.jpg"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="radio" name="profimage" id="nicolbolas"></input>
                <label className="form-check-label" for="nicolbolas">
                    <MTGColor c="./nicolbolas.jpg"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="radio" name="profimage" id="liliana"></input>
                <label className="form-check-label" for="liliana">
                    <MTGColor c="./liliana.jpg"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="radio" name="profimage" id="karn"></input>
                <label className="form-check-label" for="karn">
                    <MTGColor c="./karn.jpg"/>
                </label>
                <br></br>
                <br></br>
                <p className="text-primary text-center">Change Favorite Colors: </p>
                <hr></hr>
                <form>
                    <span className="ml-4"></span>
                    <input className="form-check-input " type="checkbox" value="" id="white" defaultChecked={user.favoriteColors.includes("./mtgwhite.png")? "checked" : ""}></input>
                    <label className="form-check-label" for="white">
                        <MTGColor c="./mtgwhite.png"/>
                    </label>
                    <span className="ml-4"></span>
                    <input className="form-check-input" type="checkbox" value="" id="blue" defaultChecked={user.favoriteColors.includes("./mtgblue.png")? "checked" : ""}></input>
                    <label className="form-check-label" for="blue">
                        <MTGColor c="./mtgblue.png"/>
                    </label>
                    <span className="ml-4"></span>
                    <input className="form-check-input" type="checkbox" value="" id="red" defaultChecked={user.favoriteColors.includes("./mtgred.png")? "checked" : ""}></input>
                    <label className="form-check-label" for="red">
                        <MTGColor c="./mtgred.png"/>
                    </label>
                    <span className="ml-4"></span>
                    <input className="form-check-input" type="checkbox" value="" id="black" defaultChecked={user.favoriteColors.includes("./mtgblack.png")? "checked" : ""}></input>
                    <label className="form-check-label" for="black">
                        <MTGColor c="./mtgblack.png"/>
                    </label>
                    <span className="ml-4"></span>
                    <input className="form-check-input" type="checkbox" value="" id="green" defaultChecked={user.favoriteColors.includes("./mtggreen.png")? "checked" : ""}></input>
                    <label className="form-check-label" for="green">
                        <MTGColor c="./mtggreen.png"/>
                    </label>
                </form>
                <br></br>
                <form>
                    <div className="form-group">
                        <label for="editProfile">Edit Bio</label>
                        <textarea className="form-control" id="editProfile" rows="15">{user.bio}</textarea>
                    </div>
                </form>
                <br></br>
                <div className="text-center">
                    <button className="btn btn-primary">Save changes</button>
                </div>
            </li>
        </ul>
    );
};
export default ProfileComponent;