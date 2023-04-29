//dependencies//
const express = require('express');
const session = require('express-session')
const passport = require('passport');
require('./authentication/auth');

/////backend in express/////
const app = express();

//middlewares//
app.use(express.json());
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

//routers for oauth//
app.use('/', require('./routes/AuthApis/authapis'));
app.use('/auth/google', require('./routes/AuthApis/authapis'));
app.use('/google/callback', require('./routes/AuthApis/authapis'));
app.use('/auth/faliure', require('./routes/AuthApis/authapis'));
app.use('/protected/', require('./routes/AuthApis/authapis'));

//routers for crud apis//
app.use('/addReminder', require('./routes/RestApis/postApi.js'));
app.use('/editReminder', require('./routes/RestApis/putApi.js'));
app.use('/deleteReminder/', require('./routes/RestApis/deleteApi.js'));
app.use('/getAllReminders', require('./routes/RestApis/getApi.js'));
app.use('/getReminder/', require('./routes/RestApis/getApi.js'));

app.listen(5000, () =>
    console.log('serverstarted')
);

