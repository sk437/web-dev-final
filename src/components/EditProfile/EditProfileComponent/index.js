import React from "react";
import MTGColor from "./MTGColor";

const ProfileComponent = ({
                            user = {
                                profPic: "./charlesV.jpg",
                                userName: "Charles V",
                                favoriteColors: ["./mtgwhite.png", "./mtgblack.png"],
                                bio: "Charles, by the grace of God, Holy Roman Emperor, forever August, King of Germany, King of Italy, King of all Spains, of Castile, Aragon, León, Navarra, Grenada, Toledo, Valencia, Galicia, Majorca, Sevilla, Cordova, Murcia, Jaén, Algarves, Algeciras, Gibraltar, the Canary Islands, King of Two Sicilies, of Sardinia, Corsica, King of Jerusalem, King of the Western and Eastern Indies, Lord of the Islands and Main Ocean Sea, Archduke of Austria, Duke of Burgundy, Brabant, Lorraine, Styria, Carinthia, Carniola, Limburg, Luxembourg, Gelderland, Neopatria, Württemberg, Landgrave of Alsace, Prince of Swabia, Asturia and Catalonia, Count of Flanders, Habsburg, Tyrol, Gorizia, Barcelona, Artois, Burgundy Palatine, Hainaut, Holland, Seeland, Ferrette, Kyburg, Namur, Roussillon, Cerdagne, Zutphen, Margrave of the Holy Roman Empire, Burgau, Oristano and Gociano, Lord of Frisia, the Wendish March, Pordenone, Biscay, Molin, Salins, Tripoli and Mechelen.",
                            }
}) => {
    const images = require.context('../../../../public/images', true)
    let curProfPic = images(user.profPic).default
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <img className="wd-profile-image-large" src={curProfPic} alt=""/>
                <button className="btn btn-primary">Change Picture</button>
                <br></br>
                <span className="text-primary">Favorite Colors: </span>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="white"></input>
                    <label className="form-check-label" for="white">
                        <MTGColor c="./mtgwhite.png"/>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="blue"></input>
                    <label className="form-check-label" for="blue">
                        <MTGColor c="./mtgblue.png"/>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="red"></input>
                    <label className="form-check-label" for="red">
                        <MTGColor c="./mtgred.png"/>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="black"></input>
                    <label className="form-check-label" for="black">
                        <MTGColor c="./mtgblack.png"/>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="green"></input>
                    <label className="form-check-label" for="green">
                        <MTGColor c="./mtgreen.png"/>
                    </label>
                </div>
                <br></br>
                <form>
                    <div className="form-group">
                        <label for="editProfile">Edit Bio</label>
                        <textarea className="form-control" id="editProfile" rows="3" value={user.bio}></textarea>
                    </div>
                </form>
            </li>
        </ul>
    );
};
export default ProfileComponent;