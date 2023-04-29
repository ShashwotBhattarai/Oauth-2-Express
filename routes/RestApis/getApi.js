const express = require('express');
const db = require('../../database/database');
const router = require('./postApi');

router.get('/', (req, res) => {
    let sql = "select * from todoapp.todos";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

router.get('/:todo_id', (req, res) => {
    let sql = `select * from todoapp.todos where todo_id=${req.params.todo_id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

module.exports = router