


const getUser = ( sqlSelect , db , userUserName, userPassword ,res) => {

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
} 

module.exports = getUser