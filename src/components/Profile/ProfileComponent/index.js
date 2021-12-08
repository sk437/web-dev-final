import React from "react";
import MTGColor from "./MTGColor";

const ProfileComponent = ({
                            user = {
                                userId: "userid-1",
                                reports: 0,
                                designation: "moderator",
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
                <div className="text-center">
                <img className="wd-profile-image-large" src={curProfPic} alt=""/>
                <p>Name: {user.userName}</p>
                {user.favoriteColors.map(color => {return(<MTGColor c={color}/>);})}
                </div>
                <hr></hr>
                <p>Biography: {user.bio}</p>
                <br></br>
                <div className="text-center">
                    <button className="btn btn-danger">Report Profile</button>
                </div>
            </li>
        </ul>
    );
};
export default ProfileComponent;