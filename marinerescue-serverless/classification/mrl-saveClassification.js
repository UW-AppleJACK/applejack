function uuidv4() {
  // not the ideal solution but it works for us, and UUID collisions won't break anything
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
}

exports.handler = function(event, context, callback) {
  var AWS = require('aws-sdk');
  AWS.config.update({region: 'us-west-2'});
  var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  
  var requestParams = event['queryStringParameters'] || event;
  
  var userImageId = requestParams['image'];
  var userClassification = requestParams['class'];
  
  if (!userImageId || !userClassification || !Number.isInteger(parseInt(userImageId)) || userClassification.length > 50) {
      var response = {
        "statusCode": 400,
        "body": JSON.stringify("invalid parameters"),
        "headers": {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,PUT"
        },
      }
  
      callback(null, response);
      return;
  };
  
  var ddbParams = {
      TableName: 'MarineRescueCrowdsourcedClassification2',
      Item: {
          'id': { S: uuidv4() },
          'ImageId': { S: userImageId },
          'Classification': { S: userClassification },
      }
  };
  
  // Call DynamoDB to add the item to the table
  ddb.putItem(ddbParams, function(err, data) {
    if (err) {
      console.log("Error", err);
      
      var response = {
        "statusCode": 500,
        "body": JSON.stringify("database error"),
        "headers": {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,PUT"
        },
      }
  
      callback(null, response);
    } else {
      console.log("Success", data);
      
      var response = {
        "statusCode": 200,
        "body": JSON.stringify("success"),
        "headers": {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,PUT"
        },
      }
  
      callback(null, response);
    }
  });
};
