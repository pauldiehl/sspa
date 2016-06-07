var params = module.exports;

params.put = function(event, payload) {
	payload.Item = event.body;
	payload.Item[event.hash] = Math.floor(Math.random() * 1000000000);
    payload.Item["createdDate"] = new Date().getTime();
    return payload;
};


params.scan = function(event, payload) {
	payload.FilterExpression = "#attr = :val";
	payload.ExpressionAttributeNames = { "#attr" : event.attribute };
	payload.ExpressionAttributeValues = { ":val" : parseInt(event.id) };
	return payload;
};

params.getKey = function(event) {
	var key = {};
	key[event.hash] = parseInt(event.id);
	return key;
};


params.update = function(event, payload) {
	payload.Key = params.getKey(event);
	
	var expression = "set ";
	var attributes = {};
	
	for (var prop in event.body) {
		if (prop !== event.hash){
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