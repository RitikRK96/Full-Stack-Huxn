import { log } from "console";
import exp from "constants";
import express from "express";
const app = express();
import path from "path";
app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => {
  // res.send("Hi")
  // res.sendStatus(400)
  //   res.json({
  //     success: true,
  //     products: ["Hello", "Hi"],
  //   });
  // res.status(400).send("My life my Rules")
  // console.log(path.resolve());
  // const pathlocation = path.resolve()
  // const path1 = path.join(pathlocation, "./index.html");
  // res.sendFile(path1)
  const pathlocation = path.resolve();
  // res.render("index", {name:"Ritik"})
  res.render("index");
});

app.get("/success", (req, res)=>{
  res.render("success")
})

const users = []

app.get("/users", (req, res)=>{
  res.json({users})
})

app.use(express.urlencoded({ extended: true }));
app.post("/contact", (req, res) => {
  console.log(req.body);
  users.push({username: req.body.name, email: req.body.email})
  res.redirect("/success")
});

app.listen(5000, () => {
  console.log("server is listening");
});
