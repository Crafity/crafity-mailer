/*jslint bitwise: true, unparam: true, maxerr: 50, white: true, nomen: true */
/*globals require, providers, exports, process */
/*!
 * crafity-config - Crafity Email Module
 * Copyright(c) 2011 Crafity
 * Copyright(c) 2011 Bart Riemens
 * Copyright(c) 2011 Galina Slavova
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var nodemailer = require('nodemailer');

exports.init = function (config) {

	nodemailer.SMTP = {
		host: config.host,
		port: config.port,
		secureConnection: config.ssl, 
		ssl: config.ssl,
		use_authentication: config.use_authentication,
		user: config.user,
		pass: config.pass
	};

	return {
		sendMail: nodemailer.send_mail
	}
};
