const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = 3000;

app.use(express());
app.use(cors());
app.use(express.static("local-store"));
app.use(fileUpload());

//setting multer storage location and use filename from file object
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "local-store");
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    cb(null, originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("server running ");
});

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.json({ status: 200, body: "Upload Done !" });
});

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/local-store/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/local-dire/${file.name}` });
  });
});

app.listen(PORT, () => {
  console.log(`server runnitn on PORT ${PORT}`);
});
