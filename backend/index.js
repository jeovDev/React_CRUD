const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
const cors = require('cors');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'registrationdb',
});
app.use(cors());
app.post('/register', (req,res) => {

    const firstn = req.body.firstname;
    const lastn = req.body.lastname;
    const usern = req.body.username;
    const passn = req.body.password;
    const sql = "INSERT INTO registrationtbl(firstname,lastname,username,password)VALUES(?,?,?,?);";
    connection.query(sql , [firstn, lastn,usern,passn], (err,res) => {
          if(err)
          {
            console.log(err);
          }   
});
})

app.get('/retrieve',(req,res) =>{
    const sql = "SELECT * FROM registrationtbl";
    connection.query(sql, (err,result)=>{
        if(err){
            console.log(err);
        }else {
            res.send(result);
        }
    });
})

app.listen(3003,()=>{
    console.log("running on 3003");
})







