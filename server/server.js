import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "62.72.47.86",
    user:"root",
    password:"nC~:^m&EAE8",
    database: 'forming'
})

app.get('/forming',(req, res)=>{
    const sql = " SELECT * FROM dbmu"
    db.query(sql,(err,result)=>{
        if(err)return res.json({Message:"Error inside server"});
        return res.json(result);
    })


})

app.post('/dbmu',(req,res)=> {
    const sql = "INSERT INTO dbmu ('nama') VALUES (?)";
    const values=[
        req.body.name,
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})
app.listen(8001,()=>{

    console.log("Listening")
})