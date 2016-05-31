var params = module.exports;

params.post = function(event, payload) {
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

params.put = function(event, payload) {
	payload.Item = event.body;
	return payload;
};