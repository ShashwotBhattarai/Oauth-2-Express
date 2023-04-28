const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '536072679777-cacmrsk9e1c3g9b9onl6mso8f6qbr159.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const db = require('./Database/database');

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log(profile.id);
    let sql = "select * from todoapp.userdetails where Email=? ";
    let data = profile.email;
    db.query(sql, data, (err, result) => {
      if (err) throw err;
      console.log(result.length);
      if (result.length == 0) {
        var sql = "INSERT INTO todoapp.userdetails (UserName, Email) VALUES (?,?)";
        data = [profile.displayName, profile.email];
        db.query(sql, data, (err, result) => {
          if (err) throw err;
          console.log("new user created");
          console.log(result);
          //res.send(result);
        });
      }
      else {
        console.log("old user fetched");
        console.log(result);
      }
    });


    return done(null, profile);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});