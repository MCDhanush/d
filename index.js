// const express = require("express"); // "type": "commonjs"
const express = require("express"); // "type": "module"
const app = express();
// import connectDB from "./db/connectDB.js";

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// connectDB();

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
