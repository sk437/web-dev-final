import React from "react";
import {Link} from "react-router-dom";

const LoginComponent = ({
                            who = {
                                avatarIcon: './anonymous.jpg',
                                userName: 'Guest'
                            }
                        }
) => {
    const images = require.context('../../../public/images', true)
    let curImage = images(who.avatarIcon).default
    if (who.userName === 'Guest') {
        return (
            <>
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title text-center">{who.userName}</h5>
                        <div className="text-center"><img className="wd-profile-image" src={curImage} alt=""/></div>
                        <hr></hr>
                        <div className="text-center">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="card float-right" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center">{who.userName}</h5>
                        <div class="text-center"><img className="wd-profile-image" src={curImage} alt=""/></div>
                        <br></br>
                        <Link to="/login" className="btn btn-primary">Logout</Link>
                        <Link to="/profile" className="btn btn-primary">Profile</Link>
                    </div>
                </div>
            </>
        );
    }
}
export default LoginComponent;