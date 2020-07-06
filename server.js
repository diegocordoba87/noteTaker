//rrquire express
const express = require("express")
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "./develop/public/notes.html"))
})

app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./develop/public/index.html"))
})


app.listen(PORT, (req, res) =>{

console.log(`currently listening to http://localhost:${PORT}`)

})
