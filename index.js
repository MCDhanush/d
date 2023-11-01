// const express = require("express"); // "type": "commonjs"
const express = require("express"); // "type": "module"
const app = express();
const connectDB = require("./db/connectDB.js");
const router = require("./routes/router.js");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4501;

app.use(router);
app.use(express.json());
connectDB();
app.use(cors());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
