const express = require("express");
const app = express();
const PORT = 3000;

app.use(express());

app.get("/", (req, res) => {
  res.send("server running ");
});

app.listen(PORT, () => {
  console.log(`server runnitn on PORT ${PORT}`);
});
