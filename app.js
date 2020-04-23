const AWS = require("aws-sdk");

AWS.config.getCredentials((error) => {
  if (error) {
    console.log(error.stack);
  } else {
    console.log("Access key: ", AWS.config.credentials.accessKeyId);
    console.log("Secret access key: ", AWS.config.credentials.secretAccessKey);
  }
});
