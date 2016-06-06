var params = module.exports;

params.post = function(event, payload) {
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

params.put = function(event, payload) {
	payload.Item = event.body;
	return payload;
};
// 
// params.update = function(event, payload) {
// 	payload.Item = //
// 	
// 	
// 	return payload;
// };


//updateItem
// AttributeUpdates: { images: { Action: "ADD", Value: item }
// 
// or
// 
// params.UpdateExpression = "set #a = :x + :y";
// params.ExpressionAttributeNames = {"#a" : "Description"};
// params.ExpressionAttributeValues = {":x" : 20,
//                                     ":y" : 45,
//                                     ":MAX" : 100,
//                                     ":correct" : "is right!!"};
