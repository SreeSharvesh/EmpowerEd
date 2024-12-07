const AWS = require('aws-sdk');
const config = new AWS.Config({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'ap-south-1',
});

AWS.config.update(config);

AWS.config.getCredentials(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to AWS successfully');
  }
});

exports.S3 = new AWS.S3();

exports.AWS;
