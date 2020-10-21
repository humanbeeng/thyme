

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
        res.send('welcome back logged in user ' + req.user.id)
    }
    else{
        
        res.send('not logged ' + req.session)
    }
});





const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log("Listening through port " + PORT + " !"));


/*
QUICK NOTES :

1. Serialize user gets called ony during the login process only

2. Once deserialized, the user object has the user object with the actual
user id and only the deserlializer is the one called for every request coming
from the client



*/
