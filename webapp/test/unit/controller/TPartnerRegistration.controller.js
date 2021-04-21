/*global QUnit*/

sap.ui.define([
	"comdemo.pcm./partnerregistration/controller/TPartnerRegistration.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TPartnerRegistration Controller");

	QUnit.test("I should test the TPartnerRegistration controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
