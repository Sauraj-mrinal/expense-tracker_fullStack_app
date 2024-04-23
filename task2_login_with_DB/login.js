const mysql = require('mysql2');
const express = require('express');
const bodyParse = require('body-parser');
const encoder = bodyParse.urlencoded();
const app = express();
const PORT = 5500;
app.use(express.static('public'));
// add style 

const connection  = mysql.createConnection({
   
    host : 'localhost',
    user : 'root',
    password : 'Mmhapu@800',
    database : 'Expense_Tracker'
});

// connect to the database
connection.connect(function(error){
    if(!error){
        console.log("Connected");
    }
    else{
        console.log("Connection Failed"+JSON.stringify(error ,undefined,2));
    }
})

app.get('/', (req, res) => {
  res.sendFile(__dirname+ "/index.html")
 
//    res.send("hello");

});

app.post("/",encoder ,(req, res) => {
     var username = req.body.username;
     var password = req.body.password;
    connection.query("select * from login_details where user_name= ? and user_password = ?",[username , password], function (err, results,fields){
        if(results.length > 0){
            res.redirect("/welcome")
        }else{
          
            res.redirect("/");
        }
        res.end();
    })

})


// for next page what we 
// we have to create routes

app.get("/welcome",function(req,res){
  res.sendFile(__dirname + "/welcome.html");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});