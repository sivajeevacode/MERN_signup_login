const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require('./model/model');

const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;
const Mongo_url = process.env.Mongo_url;

mongoose.connect(Mongo_url)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("error founded",err))

app.post('/register', async(req, res) => {
    const { name, email, password } = req.body
    const hasedpassword = await bcrypt.hash(password,10)
    userModel.findOne({ email:email})
        .then((user) => {
           if(user)
            {
             res.json("already have an account")
            }
           else
           {
            userModel.create({ name: name, email: email, password: hasedpassword })
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
