//rrquire express
const express = require("express")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, (req, res) =>{

console.log(`currently listening to http://localhost:${PORT}`)

})
