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

  });
};
