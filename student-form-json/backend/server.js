const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const DATA_FILE = "data.json";

// ------------ middleware ------------
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ------------ ensure data file exists ------------
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf8");

// ------------ GET /get ------------
app.get("/get", (_, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Read error" });
    res.json(JSON.parse(data || "[]"));
  });
});

// ------------ POST /save ------------
app.post("/save", (req, res) => {
  const newRecord = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    let records = [];
    if (!err) {
      try {
        records = JSON.parse(data);
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    }
    records.push(newRecord);

    fs.writeFile(DATA_FILE, JSON.stringify(records, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Write error" });
      res.json({ message: "Saved!" });
    });
  });
});

// ------------ start ------------
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
