const router = require("express").Router();
let database = require("../db/db.json");
const fs = require("fs");
const {v4:uuidv4} = require("uuid");

//v4 gives me a random number

//API route
router.get("/notes", (req, res) => {
    res.json(database);
  });
  
  
  //Post route
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();

    database.push(req.body);
    res.json(true);

    // This is the code I started with and will save in case I have to go back and use it 
    //fs.readFile("../db/db.json", (err, data) => {
    //   const notes = JSON.parse(data);
    //   let newNote = {
    //     id: notes.length + 1,
    //     title: req.body.title,
    //     text: req.body.text,
    //   };
  
    //   notes.push(newNote);
  
    //   fs.writeFile("../db/db.json", JSON.stringify(notes), (err) => {
    //     if (!err) console.log("it worked");
    //   });
    // });
    // res.json(database);
  });
  
  router.delete("/notes/:id", function (req, res) {
      let noteId = req.params.id;
      database = database.filter(note=>
        note.id !== noteId
      )
      res.json({ok: true});
 
  })



  module.exports = router;