const express = require("express");
const app = express();
const PORT = 3000;

// Servir fichiers statiques
app.use(express.static("public"));

// Route API exemple
app.get("/random", (req, res) => {
  const max = req.query.max || 100;
  const number = Math.floor(Math.random() * max);
  res.json({ number });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
