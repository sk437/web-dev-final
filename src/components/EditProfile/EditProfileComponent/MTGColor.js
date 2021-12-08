import React from "react"

const MTGColor = (c = "./mtgwhite.png") => {
    const images = require.context('../../../../public/images', true)
    let curImage = images(c.c).default
    return(
        <img className="wd-profile-image" src={curImage} alt=""/>
    );
}
export default MTGColor;