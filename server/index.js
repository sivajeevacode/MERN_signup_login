const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const userModel = require('./model/model')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sivajeeva459:siva123@cluster0.yxfdq.mongodb.net/first?retryWrites=true&w=majority&appName=Cluster0");

app.post('/register', (req, res) => {
    const { name, email, password } = req.body
    userModel.findOne({ email:email})
        .then((user) => {
           if(user)
           {
            res.json("already have an account")
           }
           else
           {
            userModel.create({ name: name, email: email, password: password })
            res.json("successfully registerd")
           }
        }).catch((err) => {
            console.log('error founded', err)
        })
})

app.post("/signup", (req, res) => {
    const { email, password } = req.body
    userModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.json("login successfully")
                }
                else {
                    res.json("password inccorrect")
                }
            }
            else {
                res.json("record doesn't exist")
            }
        })
})





app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})