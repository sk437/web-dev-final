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

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Route path={["/", "/home"]} exact={true}>
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
            <Route path={["/privacy-policy"]} exact={true}>
                <PrivacyPolicy/>
            </Route>
            <Route path={["/login"]} exact={true}>
                <Login/>
            </Route>
            <Route path={["/register"]} exact={true}>
                <Register/>
            </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
