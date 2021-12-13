import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/bootstrap/css/bootstrap.min.lux.css'
import {BrowserRouter, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Search from "./components/Search";
import Details from "./components/Details";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Login from "./components/Login";
import Register from "./components/Register";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import comments from "./reducers/comments";
import users from "./reducers/users";
import moderators from "./reducers/moderators";
import Reported from "./components/Reported";
import Banned from "./components/Banned";

const reducer = combineReducers({users: users, comments: comments, moderators: moderators})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Route path={["/", "/welcome"]} exact={true}>
                        <Home/>
                    </Route>
                    <Route path={["/home"]}>
                        <Home/>
                    </Route>
                    <Route path={["/profile"]}>
                        <Profile/>
                    </Route>
                    <Route path={["/edit-profile"]}>
                        <EditProfile/>
                    </Route>
                    <Route path={["/search"]}>
                        <Search/>
                    </Route>
                    <Route path={["/details"]}>
                        <Details/>
                    </Route>
                    <Route path={["/privacy-policy"]}>
                        <PrivacyPolicy/>
                    </Route>
                    <Route path={["/login"]} exact={true}>
                        <Login/>
                    </Route>
                    <Route path={["/register"]} exact={true}>
                        <Register/>
                    </Route>
                    <Route path={"/reported"}>
                        <Reported/>
                    </Route>
                    <Route path={"/banned"}>
                        <Banned/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
