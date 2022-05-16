import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserPage from "./components/UserPage";


export default function App() {

    // this function show all the user details in database
    function tryToAddUserToDB(ID, userName, password, money) {
        const userDetails = {
            ID: ID,
            username: userName,
            password: password,
            money: money
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        };
        fetch('http://localhost:5000/register', requestOptions)
            .then(response => response.json())
            .then(respJson => {
                if (respJson) {
                    if (respJson.issues) {
                        alert("ISSUES: " + respJson.issues)
                    } else {
                        alert("DATA: " + JSON.stringify(respJson))
                    }
                }
            });
    }

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
                    <Route path="/register" element={<RegisterPage registerUserDetails={tryToAddUserToDB}/>}/>
                    <Route exact path="/" element={<LoginPage getUserDetails={getUserDetails}/>}/>
                    <Route path="/userPage" element={<UserPage userDetails={getUserDetails}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}