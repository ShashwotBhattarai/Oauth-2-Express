const express = require('express');
const db = require('../Database/database');

const router =express.Router();


router.post('/', (req, res) => {

    let post = req.body;
    let sql = "insert into todoapp.todos set ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(post);

    })
});


module.exports=router;
