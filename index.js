import express from "express"
import mysql from "mysql"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0000",
    database:"test"
})

app.use(express.json())

app.get("/", (req,res) => {
    res.json("backend yau")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})