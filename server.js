//rrquire express
const express = require("express")
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000;
const database = require("./db/db.json");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/api/notes", (req, res)=>{
    res.json(database)
})
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
    const notes = JSON.parse(data);
    
    
    let newNote = {
        id: notes.length +1,
        title: req.body.title,
        text: req.body.text
    }
    
    notes.push(newNote)

    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (!err) console.log("it worked");
        res.json(database)
      })
    })    
})

app.listen(PORT, (req, res) =>{

console.log(`currently listening to http://localhost:${PORT}`)

})
