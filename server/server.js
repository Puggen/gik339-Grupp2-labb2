const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./gik339-labb2.db");


server.listen(3000, () => {
    console.log("server is listening on port 3000!")
}); 

server
    .use(express.json())
    .use(express.urlencoded({ extended: false }))   
    .use((req, res, next) => {     
        res.header('Access-Control-Allow-Origin', '*');     
        res.header('Access-Control-Allow-Headers', '*');     
        res.header('Access-Control-Allow-Methods', '*');
        next();  
     });     
server.get("/", (req, res) => {
    res.send({
        success: true, 
        message: "Jaha."
    });
});
server.post("/users", (req, res) =>  {
    console.log(req.body);

    res.send({
        success: true, 
        message: "Det funkar."
    });
});

server.get("/users", (req, res) => {
    let users;
    db.all("SELECT * FROM USERS", (err, rows) => {
        if (err) {
            res.status(500).send({success:false, message:err});
        } else {
            console.log(rows)
            res.send(rows)   
        }
    });
    return;
});

