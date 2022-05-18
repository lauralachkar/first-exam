import React, {useState} from "react";
import "./LoginPage.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "./RegisterPage";

export default function LoginPage(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function tryToLogin(event) {

        const isUserExist = props.getUserDetails(userName, password);
        alert(isUserExist);

        if (_isAdminLoginValid()) {
            toAdminPage(event);
        } else if (_isUserLoginValid()) {
            toUserPage(event);
        }
    }

    function toAdminPage(event) {
        event.preventDefault();
        window.location.href = '/admin';
    }

    function toUserPage(event) {
        event.preventDefault();
        window.location.href = '/' + userName;
    }

    function toRegisterPage(e) {
        e.preventDefault();
        window.location.href = '/register';
    }

    function _isAdminLoginValid() {
        if (userName === "ADMIN" && password === "ADMIN") {
            alert("")
        } else {
            alert("WRONG USERNAME OR PASSWORD !!!!")
        }
    }

    function _isUserLoginValid() {
        return userName === "user" && password === "password";
    }

    return (
        <div className="mainPanel">

            <div className="title">SV-BANK</div>

            <input className="input"
                   type="text"
                   id="userName"
                   placeholder="User Name"
                   onChange={e => setUserName(e.target.value)}
            />
            <br/>

            <input className="input"
                   type="password"
                   id="Password"
                   placeholder="Password"
                   onChange={e => setPassword(e.target.value)}
            />
            <br/>

            <button id="createNewUerButton" onClick={toRegisterPage}>Create new user</button>
            <br/>

            <button id="enterButton" onClick={tryToLogin}>ENTER</button>
        </div>
    );
}