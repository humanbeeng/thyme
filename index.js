

const express = require('express');
var mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


require('./models/user'); 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge : 30 * 24 *60 *60 *1000,
        keys : [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
/*
FOR each req which comes from the user, the req object contains only 
 the cookie-session id, which doesnt help the server to identify 
 the user since session id is not the one being stored in 
 mongo db database

passport.session helps in converting the cookie-session id from the req object
 to the actual deserialized user object so that server can recongize
 the user

 
*/
require('./routes/authRoutes')(app);


app.get('/', (req, res) => {
    if(req.user){
        res.send('welcome back logged in user ' + req.session)
    }
    else{
        res.send('not logged ' + req.session)
    }
});



const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log("Listening through port " + PORT + " !"));


/*



*/