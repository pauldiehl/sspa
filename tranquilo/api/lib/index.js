var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var getParams = require('./getParams.js');

module.exports = function(event, context) {

console.log('Received event:', JSON.stringify(event, null, 2));
    
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
        	if (event.hasOwnProperty('attribute')) {
        	    payload = getParams.scan(event, payload);
        		dynamo.scan(payload, callback);
   			}
   			else if (event.hasOwnProperty('id')) {
   				payload.Key = getParams.getKey(event);
   				dynamo.getItem(payload, callback);
   			}
   			else {
   				dynamo.scan(payload, callback);
   			}
            break;
        case 'POST':
        		payload = getParams.post(event, payload);
        		dynamo.putItem(payload, callback);
            break;
        case 'PUT':
        		payload = getParams.put(event, payload);
				dynamo.putItem(payload, callback);
				//payload.Key = getParams.getKey(event);
				//dynamo.updateItem(payload, callback);
            break;
        case 'DELETE': 
        		payload.Key = getParams.getKey(event);
        		dynamo.deleteItem(payload, callback); 
            break;
        default:
            callback(new Error('Unrecognized operation: ' + operation));
    }
}