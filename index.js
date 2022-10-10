const bodyparser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = 8090;

app.get("/forgotPassword", (req, res) => {
  console.log(req);
  res.json({ content: "Forgot password template", subiect: "Forgot Password" });
});
app.get("/resetPassword", (req, res) => {
  res.json({ content: "Reset password template", subiect: "Reset Password" });
});
app.get("/saveOffer", (req, res) => {
  res.json({ content: "Save offer template", subiect: "Save offer" });
});
app.get("/renewOffer", (req, res) => {
  res.json({ content: "Renew Offer template", subiect: "Renew Offer" });
});
app.get("/saveInsurance", (req, res) => {
  res.json({
    content: "Save Insurance template",
    subiect: "Save Insurance",
  });
});
app.get("/transferObject", (req, res) => {
  res.json({ content: "Transfer object template", subiect: "Transfer object" });
});

app.listen(port, () => {
  console.log(port + " :Server started");
});
