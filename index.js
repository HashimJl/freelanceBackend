import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("backend yau")
})

// show all entrys
app.get("/entry", (req, res) => {
    const q = "SELECT * FROM entry"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/entryGraphics", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Graphics and Design'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/entryDigMarketing", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Digital Marketing'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/entryWriting", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Writing and Translation'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/entryVideo", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Video and Animation'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Audio", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Music and Audio'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Programming", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Programming and Tech'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Business", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Business'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Lifestyle", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Lifestyle'"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Data", (req, res) => {
    const q = "SELECT * FROM entry WHERE category = 'Data'"
    db.query(q, (err, data) => {
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

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Entry has ben created succesfully")
    })
})

// delete an entry
app.delete("/entry/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM entry WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Entry has been deleted successfully.")
    })
})

// update an entry (not tested yet)
app.put("/entry/:id", (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE entry SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Entry has been updated successfully.")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})