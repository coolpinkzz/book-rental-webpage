const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
console.log(__dirname);

app.use(express.static(path.join(__dirname , "public")));



app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname ,"public" ,"index.html"));
});

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname ,"public" ,"login.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
