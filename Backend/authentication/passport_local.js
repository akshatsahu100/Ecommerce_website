const passport = require('passport');
const express_session = require('express-session')
const mongoose = require('mongoose');
const user = mongoose.model(require("../models/usermodel").Model_name);

const localstrategy = require('passport-local').Strategy;

const fields = {
    usernameField: "email",
    passwordField: "password"
}   

passport.use(new localstrategy(fields, (email, password, done) => {
    user.findOne({
        email: email
    }).exec().then((user) => {
        if(!user){
            return done(null, false, {
                message: "User not found"
            });
        }
        if(user.password !== password){
            return done(null, false, {
                message: "Password was incorrect"
            });
        }
        else
            return done(null, user);
    });
}));

passport.serializeUser((user,done) => {
    done(null,user._id);
});
passport.deserializeUser((id,done) => {
    user.findById(id).exec().then((user) =>{
        done(null,user)
    });
})