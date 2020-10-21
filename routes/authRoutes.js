const passport = require('passport');



module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

/*
There is a two step process in authentication.
1. To verify whether the client(our webaapp) is the one registered with Google.
It is achieved by passport.authenticate invoking the passport.use(new GoogleStrategy)
in the passport.js file.

2. Once Google verifies that the client is the one which is registered,
    i. callback URL with a get req is called.
    ii. the /auth/google/callback is again handled by passport by invoking the passport.authenticate('google') 
        which further does its thing as mentioned in the below comment.
*/


    app.get('/auth/google/callback', passport.authenticate('google'));
    
    /*
    now passport.authenticate('google) will invoke the passport.initialize
    present in the index.js and then passport.initialize is invoked.

    User clicks Sign in with Google which has the address /auth/google/callback
        by which the passport.authenticate is invoked
              |
              |
            
        passport.initialize() in index.js
                |
                |
        passport.session() -- passport.serializeUser() -- further path is in passport.js file
    

    */

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/google/callback', (req,res) => {
        res.send(req.user.id);
    });
};




