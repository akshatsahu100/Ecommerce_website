const express = require('express');
const cors = require('cors');
const passport = require('passport');
const {PORT, mongo_url} = require('./config');
const mongoose = require('mongoose');
const path = require('path')
const session = require('express-session');
const products = require('./productsList');
require("./authentication/passport_local");
const bodyParser = require('body-parser');

app = express();
app.use(express.json());

app.use( (req,res,next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
})
app.use(express.urlencoded({
    extended: false
}));

app.use(session({   
    secret: "Random secret hardcoded",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/user', require('./routes/user_routes').route);

app.get('/products', (req,res) => {
    res.send(products);
})




////////////////////// Connections /////////////////////
connectdb(mongo_url).then(() => {
    startlistening(PORT);
});

function startlistening(port){
        app.listen(port, (err) => {
            if(err)
                return console.error(err);
            console.log('Connected to http://localhost:' + port);
        }); 
}

function connectdb(mongo_url){
    mongoose.connection.on("error", (err) => {
        console.error(err);
    });

    mongoose.connection.once("open", () =>{
        console.log('Successfully connected to db');
    })
    return mongoose.connect(mongo_url);
}