//Rendering
import express from "express";
import React from "react";
import rendertoString from "react-dom/server";
// component import
import Home from "./client/component/Home";

const app = express();

//render
//Creates instances of a bunch of components and mounts them into DOM node
//rendertoString
//Renders a bunch of of components one time and produces a string out of
//all the resulting HTML

app.get("/", (req, res) => {
  //Render home component as html
  const home = rendertoString(<Home />);

  res.send(home);
});

app.listen(3000, () => {
  console.log("Listening to port " + 3000);
});
