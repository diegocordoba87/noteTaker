//rrquire express
const express = require("express")
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})


app.listen(PORT, (req, res) =>{

console.log(`currently listening to http://localhost:${PORT}`)

})
