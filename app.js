const express = require("express");

const app = express();
const port = 5001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => res.json("api get successfully"));
