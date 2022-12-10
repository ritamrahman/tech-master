const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const course = courses.filter((course) => course.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
