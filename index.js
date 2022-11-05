import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0000",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.json("backend yau")
})

// show all entrys
app.get("/entry", (req,res) => {
    const q = "SELECT * FROM entry"
    db.query(q, (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// create a new entry
app.post("/entry", (req, res) => {
    const q = "INSERT INTO entry (`username`,`skill`,`category`,`description`,`price`,`rating`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.skill,
        req.body.category,
        req.body.description,
        req.body.price,
        req.body.rating
    ]

    db.query(q, [values], (err,data) => {
        if (err) return res.json(err)
        return res.json("Entry has ben created succesfully")
    })
})

// delete an entry
app.delete("/entry/:id", (req,res) => {
    const bookId = req.params.id
    const q = "DELETE FROM entry WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Entry has been deleted successfully.")
    })
})

app.put("/entry/:id", (req,res) => {
    const bookId = req.params.id
    const q = "UPDATE entry SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been updated successfully.")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})