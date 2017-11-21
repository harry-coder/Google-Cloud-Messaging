//var gcm = require('node-gcm');

var FCM = require('fcm-node');
var serverKey = 'AAAAR33Vwcs:APA91bH4RZFZvhF1-wQshS4spQygd14JvAjAaLqyrbt0qexzDOJM36X1QFLY-uXLlAOSxfetjkbYgwfRQHzGySskDcSNwUtQZ2O2GoxrV1a1XJDvBgiZiZzvyw8UtyX1D0yCl17IO6aH';
var fcm = new FCM(serverKey);
var constants = require('../constants/constants.json');

exports.sendMessage = function(message,registrationId,callback){

/*
	var message = new gcm.Message({data: {message: message}});
	var regTokens = [registrationId];
	var sender = new gcm.Sender(constants.gcm_api_key);
	sender.send(message, {
		registrationTokens: regTokens },
		function (err, response) {

		if (err){

			console.error(err);
			callback(constants.error.msg_send_failure);

		} else 	{

			console.log(response);
			callback(constants.success.msg_send_success);
		}

	});
*/
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)

        to: registrationId,
        data: {
            message: message
        }

     /*   notification: {
            title: 'Back bosdk',
            body: 'Body of your push notification'
        }*/


    };

    fcm.send(message, function(err, response){
        if (err) {
            console.error(err);
            callback(constants.error.msg_send_failure);

        }
        else {
            console.log(response);
            callback(constants.success.msg_send_success);

        }
    });


};
