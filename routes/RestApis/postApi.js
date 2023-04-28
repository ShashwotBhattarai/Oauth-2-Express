// const Joi= require('joi');
const express = require('express');
const db = require('../../Database/database');

const router = express.Router();

// const checkAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) {
//     return res.redirect("/auth/google");
//     }
//     next();
// };


// const schema= Joi.object({
//     todo_title: Joi.string().min(3).required()
// });

router.post('/', (req, res) => {

    //    const {err,value}=schema.validate(req.body);

    //     if (err){
    //         res.status(400).send("Bad Request");
    //     }

    let post = req.body;
    let sql = "insert into todoapp.todos set ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(post);
    })

});

module.exports = router;
