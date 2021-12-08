import React from "react";
import MTGColor from "./MTGColor"

const RegisterComponent = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
            <form>
                <label for="userName">Enter Username: </label>
                <input type="text" class="form-control" id="userName" placeholder="Username"></input>
                <br></br>
                <label for="passWord">Enter Password: </label>
                <input type="password" class="form-control" id="passWord" placeholder="Password"></input>
                <br></br>
                <label for="confirmPassWord">Confirm Password: </label>
                <input type="password" class="form-control" id="confirmPassWord" placeholder="Retype Password"></input>
                <br></br>
                <p className="text-primary text-center">Choose a profile image</p>
                <hr></hr>
                <span className="ml-4"></span>
                <input className="form-check-input" type="radio" defaultChecked="checked" name="profimage" id="tibalt"></input>
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
                <p className="text-primary text-center">Choose your favorite colors</p>
                <hr></hr>
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
                <div className="text-center">
                    <button class="btn btn-primary rounded-pill">Register</button>
                </div>
            </form>
            </li>
        </ul>
    );
};
export default RegisterComponent;