import React from "react";

const IntroPanel = () => {
    return(
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center text-primary">Welcome to the Generic Magic Forum</h5>
                <p className="card-text">{"Hello and welcome to the MTG Card Forum! Here you can look up cards courtesy of the Scryfall API and comment on your favorites! Feel free to make full use of any of the functionalities we offer. Moderators are reviewing the content posted on the forum."}</p>
            </div>
        </div>
    </>
    );
}
export default IntroPanel;