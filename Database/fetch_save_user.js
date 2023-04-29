const db = require('../database/database');

let saveuser = (profile) => {
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
}

module.exports = saveuser;
