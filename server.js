const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);




app.listen(PORT, (req, res) => {
  console.log(`currently listening to http://localhost:${PORT}`);
});
