const request = require('request');
const requestPromise = require('request-promise');
const AWS = require('aws-sdk');

const accessKeyId = AWS.config.credentials.accessKeyId;
const secretAccessKey = AWS.config.credentials.secretAccessKey;
const sessionToken = AWS.config.credentials.sessionToken;

console.log('accessKeyId: ', accessKeyId);
console.log('secretAccessKey: ', secretAccessKey);
console.log('sessionToken: ', sessionToken);

const uri = 'https://loqckyh2rb.execute-api.us-east-1.amazonaws.com/demo';

const aws = {
  key: accessKeyId,
  secret: secretAccessKey,
  session: sessionToken,
  sign_version: 4,
  service: 'execute-api',
};

console.log(aws);

exports.handler = async event => {
  try {
    const data = requestPromise(uri, aws).promise();
    console.log('成功');
    console.log(data);
    return data;
  } catch (err) {
    console.log('失敗');
    console.log(err.message);
    return err.message;
  }
};
