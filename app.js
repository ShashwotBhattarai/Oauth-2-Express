//dependencies//
const express = require('express');
const session = require('express-session')
const passport = require('passport');
require('./auth');


// function isloggedIn(req, res, next){
//     req.user ? next() : res.sendStatus(401);
// }

function checkAuthenticated (req, res, next) {
    if (req.isAuthenticated()) { return next() }
    res.redirect("/auth/google");
  }

/////backend in express/////
const app = express();

app.use(express.json());
app.use(session({secret:'cats'}));
app.use(passport.initialize());
app.use(passport.session());

///////routes//////
app.get('/',(req,res)=>{
    res.send('<a href="/auth/google"> Authentcate with Google </a>');

});

app.get('/auth/google',
passport.authenticate('google',{scope:['email','profile']})
);

app.get('/google/callback',
passport.authenticate('google',{
    successRedirect: '/protected/',
    failureRedirect: '/auth/faliure',

})
);
 
app.get('/auth/faliure',(req,res)=>{
    res.send('something went wrong');
});

app.get('/protected/',checkAuthenticated,(req,res)=>{
    res.send('<a href="/addReminder"> add reminder </a>');
});


app.use('/addReminder',require('./routes/postApi.js'));

app.use('/editReminder',require('./routes/putApi.js'));

app.use('/deleteReminder/',require('./routes/deleteApi.js'));

app.use('/getAllReminders',require('./routes/getApi.js'));

app.use('/getReminder/',require('./routes/getApi.js'));


app.listen(5000, () =>
    console.log('serverstarted')
);

