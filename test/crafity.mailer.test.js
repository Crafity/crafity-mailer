/*!
 * crafity.filesystem.test - Filesystem tests
 * Copyright(c) 2012 Crafity
 * Copyright(c) 2012 Galina Slavova
 * MIT Licensed
 */

/**
 * Test dependencies.
 */
var jstest = require('crafity-jstest')
	, assert = jstest.assert
	, context = jstest.createContext()
	, fs = require('fs')
	, mailer = require('../main.js');

// Print out the name of the test module
console.log("Testing 'main.js' in crafity-mailer... ");

/**
 * The tests
 */
var tests = {

	'crafity.mailer must be the fullname of this module': function () {
		console.log("mailer.fullname =", mailer.fullname);
		assert.areEqual("crafity.mailer", mailer.fullname, "Expected module name is crafity.mailer!");
	},

	'crafity.mailer must have package.json file': function () {

		fs.readFile("./package.json", function (err, data) {
			assert.isDefined(data, "Expected package.json defined");
		});
	},

	'crafity.mailer must have the same version as quoted in package.json': function () {

		fs.readFile("./package.json", function (err, data) {
			var json = JSON.parse(data.toString());
			console.log("package.version =", json.version);

			assert.isDefined(json.version, "Expected fs to be defined");
			assert.areEqual(mailer.version, json.version, "Expected the same module version!");
		});
	}

};

/**
 * Run the tests
 */
context.run(tests);
