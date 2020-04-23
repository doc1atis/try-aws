const AWS = require("aws-sdk");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ olgy: "i received it" });
});
console.log("app is running olgy");
AWS.config.getCredentials((error) => {
  if (error) {
    console.log(error.stack);
  } else {
    console.log("Access key: ", AWS.config.credentials.accessKeyId);
    console.log("Secret access key: ", AWS.config.credentials.secretAccessKey);
  }
});
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("app is listening on port: ", port);
});
