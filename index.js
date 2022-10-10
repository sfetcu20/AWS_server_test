const express = require("express");
const app = express();
const port = 8080;

app.get("/forgotPassword", (req, res) => {
  res.json({ data: "Forgot password template" });
});
app.get("/resetPassword", (req, res) => {
  res.json({ data: "Reset password template" });
});
app.get("/saveOffer", (req, res) => {
  res.json({ data: "Save offer template" });
});
app.get("/renewOffer", (req, res) => {
  res.json({ data: "Renew offer template" });
});
app.get("/saveInsurance", (req, res) => {
  res.json({ data: "Save Insurance template" });
});
app.get("/transferObject", (req, res) => {
  res.json({ data: "Transfer object template" });
});

app.listen(port, () => {
  console.log(port + " :Server started");
});
