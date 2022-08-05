const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const{ getFortune, getAllPictures,postFortune} = require("./controller");
// const { postPicture}= require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
// app.post("/api/PicturePost",postPicture)
app.get("/api/postpicture", getAllPictures)
app.post("/api/addFortune",postFortune)
app.listen(4000, () => console.log("Server running on 4000"));
