import {useState} from 'react';
import React from 'react';

export default function RegisterPage(props) {

    const [ID, setID] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setPasswordValid] = useState("");
    const [money, setMoney] = useState(0)

    const IDMaxLength = 9;
    const userNameMinLength = 4;
    const passwordMinLength = 6;
    const moneyMin = 0;
    const moneyMax = 1000000;

    function checkInputs() {
        const issues = [];

        _checkIdIssues();
        _checkUserNameIssues();
        _checkPasswordIssues();
        _checkConfirmPasswordIssues();

        if (issues.length === 0) {
            props.registerUserDetails(ID, userName, password, money);
            //window.location.href = '/';

        } else {
            printIssues();
        }

        function printIssues() {
            let toPrint = "ISSUES:\n";
            for (const issue of issues) {
                toPrint += issue + "\n"
            }
            alert(toPrint);
        }

        function _checkIdIssues() {
            if (ID.length < IDMaxLength) {
                issues.push("ID LENGTH IS TOO SHORT");
            }
        }

        function _checkUserNameIssues() {
            if (userName.length < userNameMinLength) {
                issues.push("WRONG USERNAME");
            }
        }

        function _checkPasswordIssues() {
            if (password.length < passwordMinLength) {
                issues.push("WRONG PASSWORD");
            }
        }

        function _checkConfirmPasswordIssues() {
            if (confirmPassword.length !== password.length) {
                issues.push("YOU HAVE TO PUT THE SAME PASSWORD");
            }
        }
    }

    const fixMoney = event => {
        const moneyAmount = Math.max(moneyMin, Math.min(moneyMax, Number(event.target.value)));
        setMoney(moneyAmount);
    };

    return (
        <div className="mainPanel">
            <div className="title">REGISTER</div>

            <input className="input"
                   type="number"
                   id="ID"
                   placeholder="ID"
                   onChange={e => setID(e.target.value)}
            />
            <br/>

            <input className="input"
                   type="text"
                   id="userName"
                   placeholder="User Name"
                   onChange={e => setUserName(e.target.value)}
            />
            <br/>

            <input className="input"
                   type="password"
                   id="password"
                   placeholder="Password"
                   onChange={e => setPassword(e.target.value)}
            />
            <br/>

            <input className="input"
                   type="password"
                   id="confirmPassword"
                   placeholder="Confirm Password"
                   onChange={e => setPasswordValid(e.target.value)}
            />
            <br/>

            <input className="input"
                   type="number"
                   id="money"
                   placeholder="Money"
                   value={money}
                   onChange={fixMoney}
            />
            <br/>

            <button onClick={checkInputs}>Create</button>

        </div>
    );
}
