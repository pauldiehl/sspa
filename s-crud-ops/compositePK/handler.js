'use strict';

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();
let lib = require('lib');

exports.handler = (event, context) => {

//console.log('Received event:', JSON.stringify(event, null, 2));
    
	var operation = event.operation,
		payload = { TableName: event.table };

	function callback(err, data) {
      if (err) {
          console.log(err, err.stack);
          context.fail(err);
      }
      else {
        context.succeed(data.hasOwnProperty('Item')  ? data.Item :  data.hasOwnProperty('Items') ? data.Items : data );
      }
    }
	
    switch (operation) {
        case 'GET':
        	if (event.hasOwnProperty('hashID') && !event.hasOwnProperty('rangeID')) {
        	    payload = lib.query(event, payload);
        		dynamo.query(payload, callback);
   			}
   			else if (event.hasOwnProperty('hashID') && event.hasOwnProperty('rangeID')) {
   				payload.Key = lib.getKey(event);
   				dynamo.getItem(payload, callback);
   			}
   			else {
   				dynamo.scan(payload, callback);
   			}
            break;
        case 'POST':
        		payload = lib.post(event, payload);
        		dynamo.putItem(payload, callback);
            break;
        case 'PUT':
        		payload = lib.put(event, payload);
				dynamo.putItem(payload, callback);
            break;
        case 'DELETE': 
        		payload.Key = lib.getKey(event);
        		dynamo.deleteItem(payload, callback); 
        	break;
        default:
            callback(new Error('Unrecognized operation: ' + operation));
    }
};