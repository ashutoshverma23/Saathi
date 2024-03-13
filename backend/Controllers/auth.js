import { createRequire } from "module";
const require = createRequire(import.meta.url);
import bcrypt from "bcrypt-nodejs";
// const bcrypt = require("bcrypt-nodejs");

// const { getUserhash, getUserById, addCredential } = require("../Database/database");
import { getUserhash, getUserById, addCredential } from "../Database/database.js";
//May have to update to bcrypt or bcrypt-js

export const registerUser = (req, res) => {
    const { name, email, phone, password, address } = req.body;


    console.log(email, password);

    if (name && email && phone && password) {
        //validate input
        let userid = 0;
        //hash the password
        bcrypt.hash(password, null, null, async (err, hsh) => {
            try {
                //store in DB
                userid = await addCredential(email, hsh);
                if (fail) {
                    res.status(400).json(fail.detail);
                }
                res.status(200).send("Successfully registered!");
            } catch {
                res.status(400);
                console.log(err);
                return;
            }
        });
        //create session/login
        req.session.isAuth = true;
        req.session.userid = userid;
        req.session.save(() => {
            console.log("Login session - ", req.sessionID);
        });
        return res.status(200).json({ userid });
    }
}

export const verifyLogin = async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);


    try {
        const { userid, hashedpassword } = await getUserhash(email);
        if (!userid) {
            console.log("Wrong email");
            return res.status(400).json("Invalid Credentials");
        }
        bcrypt.compare(password, hashedpassword, async function (err, match) {
            // res == true
            if (!match) {
                console.log("Wrong pass");
                return res.status(400).json("Invalid Credentials");
            }
            const type = await getUserById(userid);
            req.session.isAuth = true;
            req.session.userid = userid;
            req.session.save(() => {
                console.log("Login session - ", req.sessionID);
            });
            return res.status(200).json({ userid });
        });
    } catch (err) {
        console.log(err);
    }
}


export default {
    registerUser,
    verifyLogin
}