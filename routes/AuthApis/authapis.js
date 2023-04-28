const express = require('express')
const passport = require('passport');
require('../../Authentication/auth');
const router = express.Router();

//function to check authentication status of a request and user//
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next() }
    res.redirect("/auth/google");
};

///////routes//////
router.get('/', (req, res) => {
    res.send('<a href="/auth/google"> Authentcate with Google </a>');

});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected/',
        failureRedirect: '/auth/faliure',

    })
);

router.get('/auth/faliure', (req, res) => {
    res.send('something went wrong');
});

router.get('/protected/', checkAuthenticated, (req, res) => {
    res.send('<a href="/addReminder"> add reminder </a>');
});

module.exports = router;