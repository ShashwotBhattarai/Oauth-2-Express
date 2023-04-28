const express = require('express');
const db = require('../../Database/database');
const router = require('./postApi');

router.delete('/:todo_id', (req, res) => {

    let sql = `delete from todoapp.todos where todo_id=${req.params.todo_id};`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Reminder Deleted");
    });
});

module.exports = router;
