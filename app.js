//dependencies//
const express = require('express');

/////backend in express/////
const app = express();
app.use(express.json());

app.use('/addReminder',require('./routes/postApi.js'));

app.use('/editReminder',require('./routes/putApi.js'));

app.use('/deleteReminder/',require('./routes/deleteApi.js'));

app.use('/getAllReminders',require('./routes/getApi.js'));

app.use('/getReminder/',require('./routes/getApi.js'));


app.listen(3000, () =>
    console.log('serverstarted')
);

