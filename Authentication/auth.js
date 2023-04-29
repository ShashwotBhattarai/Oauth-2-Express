const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const db = require('../database/database');
const auth_credentials = require('../credentials/auth_credentials');
const saveuser=require('../database/fetch_save_user');

passport.use(new GoogleStrategy({
  clientID: auth_credentials.GOOGLE_CLIENT_ID,
  clientSecret: auth_credentials.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log(profile.id);
    saveuser(profile);
    return done(null, profile);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
