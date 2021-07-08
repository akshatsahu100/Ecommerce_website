const route = require('express').Router();
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const user = mongoose.model(require("../models/usermodel").Model_name);


///////////////// Get methods /////////////////
route.get("/login", (req, res) => {
    return res.sendFile(path.join(__dirname, "../Pages/login_page.html"));
})

route.get("/register", (req, res) => {
    return res.sendFile(path.join(__dirname, "../Pages/register_page.html"));

})

route.get("/loggedin", (req, res) => {
    if (req.isAuthenticated())
        return res.sendFile(path.join(__dirname, "../Pages/logged_in.html"));
    else
        return res.json({
            error: "User not logged in"
        });

})

///////////////// post methods /////////////////
route.post('/register', (req, res) => { 
        // const temp = {
        //     "name": "Akshat",
        //     "email": "Sahu"
        // }
        // req.body = temp;
        const newuser = new user(req.body);

        console.log(req.body);
        console.log(req.params);
        console.log(req.query);
       

        newuser.save().then(() => {
            res.redirect("http://localhost:3000/login");
        }).catch((err) => {
            res.json({ "error": 'user already exists or invalid entries' });
        })

});

route.post('/login', passport.authenticate('local', {
    successRedirect: "/user/loggedin",
    failureRedirect: "/user/login"
}));
// route.post('/login', (req,res) => {
//     res.send("on");
// })x
module.exports = { route };