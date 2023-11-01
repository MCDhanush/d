// const express = require("express"); // "type": "commonjs"
const express = require("express"); // "type": "module"
const app = express();
const connectDB = require("./db/connectDB.js");

const PORT = process.env.PORT || 4501;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

connectDB();

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
