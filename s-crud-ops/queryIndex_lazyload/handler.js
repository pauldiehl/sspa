'use strict';

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();

exports.handler = (event, context) => {

console.log('Received event:', JSON.stringify(event, null, 2));
    
	var payload = {};
    payload.TableName = event.table;
	payload.KeyConditionExpression = "#attr = :val";
	payload.ExpressionAttributeNames = { "#attr" : event.hash };
	payload.ExpressionAttributeValues = { ":val" : parseInt(event.hashID) };
	payload.ScanIndexForward = false;
    payload.Limit = event.limit;
    
    var key = {};
	key[event.hash] = parseInt(event.hashID);
	key[event.range] = parseInt(event.rangeID); //LastEvaluatedKey
    payload.ExclusiveStartKey = key;
        
    dynamo.query(payload, callback);

	function callback(err, data) {
      if (err) {
          console.log(err, err.stack);
          context.fail(err);
      }
      else {
        context.succeed(data.hasOwnProperty('Item')  ? data.Item :  data.hasOwnProperty('Items') ? data.Items : data );
      }
    }   	
};