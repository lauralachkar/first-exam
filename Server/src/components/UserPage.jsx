import React, {useState} from "react";

export default function UserPage(props) {
    const [numberInput, setNumber] = useState("");
    const [textInput, setText] = useState("");

    const userDetails = props.userDetails;

    function showUserBalance() {
        alert("user: " + userDetails.username + "\nbalance: " + userDetails.money);
    }

    function checkPaymentSettings() {
        const isInputFieldsValid = _isInputFieldsValid();
        const payment = {
            user: userDetails.username,
            number: numberInput,
            text: textInput
        }

        if (isInputFieldsValid) {
            alert(JSON.stringify(paymentArray));
            window.location.href = '/';
        }

        return false;
    }

    function _isInputFieldsValid() {
        return numberInput && textInput;
    }

    function showUserDetails() {
        alert(JSON.stringify(userDetails));
    }

    return (
        <div className="mainPanel">

            <div className="title">Welcome
                <br/>Name
            </div>

            <button onClick={showUserBalance} id="userBalanceButton">Balance</button>

            <form>
                <button onClick={checkPaymentSettings}>Action</button>

                <input className="input"
                       type="number"
                       id="numberField"
                       onChange={e => setNumber(e.target.value)}
                />
                <br/>

                <input className="input"
                       type="text"
                       id="textField"
                       onChange={e => setText(e.target.value)}
                />
                <br/>
            </form>
            &q
            <button onClick={showUserDetails}>Edit</button>

        </div>
    );
};