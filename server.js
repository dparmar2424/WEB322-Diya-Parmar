const express = require("express");

const app = express();
const PORT = 8080;
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
const users = require("./data/fakeUsers.json");

app.get("/", (req, res) => {
  res.render('index');
});

app.post("/", (req, res) => {
  if (req.body.username === "lover" && req.body.password === "lover<3") {
    res.redirect("/list");
  } else {
    res.redirect("/");
  }
});

app.get("/list", (req, res) => {
  res.render('list', { users: users.slice(0, 25) });
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  res.render('detail', { user: user });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
