const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/contact", (req, res) => res.send("contact"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
