const express = require('express');
const db = require('../../Database/database');
const router = require('./postApi');

router.put('/', (req, res) => {

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

module.exports = router;