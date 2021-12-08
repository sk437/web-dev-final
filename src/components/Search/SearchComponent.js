import React from "react";
import MTGColor from "./MTGColor"

const SearchComponent = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
            <form>
                <label for="cardName">Card Name: </label>
                <input type="text" className="form-control" id="cardName" placeholder="Name of Card"></input>
                <br></br>
                <label for="type">Card Type: </label>
                <input type="text" className="form-control" id="type" placeholder="Type of Card"></input>
                <br></br>
                <label for="text">Card Text: </label>
                <textarea type="text" className="form-control" rows="3" id="type" placeholder="Rules Text "></textarea>
                <br></br>
                <p className="text-primary">Card Colors: </p>
                <div className="row">
                <div className="col-3">
                    <select class="form-select">
                        <option selected>AND</option>
                        <option>OR</option>
                    </select>
                </div>
                <div className="col-9">
                <span className="ml-4"></span>
                <input className="form-check-input" type="checkbox" value="" id="white"></input>
                <label className="form-check-label" for="white">
                    <MTGColor c="./mtgwhite.png"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="checkbox" value="" id="blue"></input>
                <label className="form-check-label" for="blue">
                    <MTGColor c="./mtgblue.png"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="checkbox" value="" id="red"></input>
                <label className="form-check-label" for="red">
                    <MTGColor c="./mtgred.png"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="checkbox" value="" id="black"></input>
                <label className="form-check-label" for="black">
                    <MTGColor c="./mtgblack.png"/>
                </label>
                <span className="ml-4"></span>
                <input className="form-check-input" type="checkbox" value="" id="green"></input>
                <label className="form-check-label" for="green">
                    <MTGColor c="./mtggreen.png"/>
                </label>
                </div>
                </div>
                <br></br>
                <div className="text-center">
                    <button class="btn btn-primary rounded-pill">Search</button>
                </div>
            </form>
            </li>
        </ul>
    );
};
export default SearchComponent;