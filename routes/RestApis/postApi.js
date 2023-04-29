const Joi = require('joi');
const express = require('express');
const db = require('../../database/database');
const router = express.Router();

router.post('/', (req, res) => {
    // const schema = Joi.object({
    //     todo_title: Joi.string().min(5).required()
    // });
    // const {err} = schema.validate(req.body);
    // console.log(err);
    // if (err) {
    //     res.status(400).send("Bad Request");
    // }
    // else {
    //     let post = req.body;
    //     let sql = "insert into todoapp.todos set ?";
    //     let query = db.query(sql, post, (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //         res.send(post);
    //     })

    // }

    let post = req.body;
    let sql = "insert into todoapp.todos set ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(post);
    })
});

module.exports = router;
