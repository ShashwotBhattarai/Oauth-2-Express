
//dependencies//
const express = require('express');
const db = require('./Database/database.js');

/////backend in express/////

const app = express();
app.use(express.json());

app.post('/addReminder', (req, res) => {

    let post = req.body;
    let sql = "insert into todoapp.todos set ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(post);

    })
});

app.get('/getAllReminders', (req, res) => {
    let sql = "select * from todoapp.todos";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getReminder/:todo_id', (req, res) => {
    let sql = `select * from todoapp.todos where todo_id=${req.params.todo_id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.put('/editReminder', (req, res) => {

    let sql_edit = "update todoapp.todos set todo_title=?,details=?,reminder=?,reminder_date=? where todo_id=?; ";
    data = [req.body.todo_title, req.body.details, req.body.reminder, req.body.reminder_date, req.body.todo_id];
    db.query(sql_edit, data, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    let sql_fetch = `select * from todoapp.todos where todo_id=${req.body.todo_id}`;
    db.query(sql_fetch, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

});

app.delete('/deleteReminder/:todo_id', (req, res) => {

    let sql = `delete from todoapp.todos where todo_id=${req.params.todo_id};`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Reminder Deleted");
    });
});

app.listen(3000, () =>
    console.log('serverstarted')
);

