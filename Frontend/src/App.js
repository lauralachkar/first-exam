import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserPage from "./components/UserPage";


export default function App() {
    function getUserDetails(username, password) {
        // const userDetails = _userDetailsInDB({username: username});
        // if (userDetails && userDetails[0].password === password) {
        //     return userDetails;
        // }

        // const userDetails = usersDetails.has(userName)
        // if (userDetails && userDetails.password === password) {
        //    return userDetails;
        // }
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route exact path="/" element={<LoginPage getUserDetails={getUserDetails}/>}/>
                    <Route path="/userPage" element={<UserPage userDetails={getUserDetails}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}