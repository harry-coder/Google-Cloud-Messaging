var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deviceSchema = mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String
	
});

mongoose.connect('mongodb://localhost:27017/node-android-push',(err)=>{
	if(err)
		return console.log(err);
	console.log("Database connected successfully");
});

module.exports = mongoose.model('device', deviceSchema);        