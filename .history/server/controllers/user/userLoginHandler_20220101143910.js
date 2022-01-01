//module export

const userdb = require('../../model/user/user')
module.exports = (app, db) => {
  app.post("/login/usr", (req, res) => {
    //variables
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;

    //query
    const sqlSelect =
      "SELECT * FROM user_login WHERE userUserName = ? AND userPassword = ?";

      userdb.getUser(sqlSelect, db ,userUserName, userPassword , res)
      
    //
    db.query(sqlSelect, [userUserName, userPassword], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        res.send(result);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};
