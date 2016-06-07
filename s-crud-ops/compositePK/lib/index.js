var params = module.exports;

params.put = function(event, payload) {
	payload.Item = event.body;
    payload.Item["createdDate"] = new Date().getTime();
    return payload;
};

params.query = function(event, payload) {
	payload.KeyConditionExpression = "#attr = :val";
	payload.ExpressionAttributeNames = { "#attr" : event.hash };
	payload.ExpressionAttributeValues = { ":val" : parseInt(event.hashID) };
	return payload;
};

params.getKey = function(event) {
	var key = {};
	key[event.hash] = parseInt(event.hashID);
	key[event.range] = parseInt(event.rangeID);
	return key;
};

params.update = function(event, payload) {
	payload.Key = params.getKey(event);
	
	var expression = "set ";
	var attributes = {};
	
	for (var prop in event.body) {
		if (prop !== event.hash && prop !== event.range){
			var attrName = ":" + prop;
			expression += prop + " = " + attrName + ",";
			attributes[attrName] = event.body[prop];
		}
	};
	
	expression = expression.substring(0, expression.length - 1);
	
	payload.UpdateExpression = expression;
	payload.ExpressionAttributeValues = attributes;
	
	return payload;
};