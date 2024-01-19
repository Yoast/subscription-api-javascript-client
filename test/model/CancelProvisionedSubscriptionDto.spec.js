/*
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YoastProvisionerApiClient);
  }
}(this, function(expect, YoastProvisionerApiClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CancelProvisionedSubscriptionDto', function() {
      beforeEach(function() {
        instance = new YoastProvisionerApiClient.CancelProvisionedSubscriptionDto();
      });

      it('should create an instance of CancelProvisionedSubscriptionDto', function() {
        // TODO: update the code to test CancelProvisionedSubscriptionDto
        expect(instance).to.be.a(YoastProvisionerApiClient.CancelProvisionedSubscriptionDto);
      });

      it('should have the property immediately (base name: "immediately")', function() {
        // TODO: update the code to test the property immediately
        expect(instance).to.have.property('immediately');
        // expect(instance.immediately).to.be(expectedValueLiteral);
      });

    });
  });

}));
