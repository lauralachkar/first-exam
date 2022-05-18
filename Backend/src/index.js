const dbName = "FirstExam";

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log("Connected to " + dbName + " database"));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    money: {
        type: Number,
        default: 0,
    }
});
const UserDetails = mongoose.model('users', UserSchema);
UserDetails.createIndexes();

// For DB and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
    resp.send("DB (" + dbName + ") is Working.");
});

app.post("/register", async (req, resp) => {
    try {
        UserDetails.exists({ID: req.body.ID}, async function (err, doc) {
            if (doc) {
                console.log("User " + req.body.ID + " already registered");
                resp.status(400).send("User Exists!!!");

            } else {
                const userDetails = new UserDetails(req.body);
                let result = await userDetails.save();
                result = result.toObject();
                if (result) {
                    delete result.password;
                    console.log(result);
                    resp.status(200).send("");
                }
            }
        });
    } catch (e) {
        resp.status(400).send("Unknown Issue!!!");
    }
});

app.listen(5000);