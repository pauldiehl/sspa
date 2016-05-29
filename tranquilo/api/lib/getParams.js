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

// params.put = function(event, payload) {
// 	payload.AttributeUpdates = { mapPayloadForUpdates(event.body) };
// 	console.log(payload);
// 	return payload;
// };
// 
// 
// function mapPayloadForUpdates(body){
// 	//var obj = { accountName : { Action: 'PUT', Value: "bobbobobobob" } };
// 	
// 	var updateStr = "set ";
// 	var hash = "accountID";
// 	var range = "sortName";
// 	for(var key in body) {
// 		if(key !== hash || key !== range) {
// 		updateStr +=  key  + " = "  + body[key];
// 		}
// 	}
// 	
// 	return  updateStr;
// };


//query
//[KeyConditionExpression] = event.range + "=" + event.id;