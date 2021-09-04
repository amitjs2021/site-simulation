const express = require("express");
const app = express();
const PORT = 3000;

app.use(express());

app.get("/", (req, res) => {
  res.send("server running ");
});

app.get("/upload", (req, res) => {
  res.send("/upload route from api");
});

app.listen(PORT, () => {
  console.log(`server runnitn on PORT ${PORT}`);
});
