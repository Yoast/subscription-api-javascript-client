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
    describe('SetProvisionedSiteDto', function() {
      beforeEach(function() {
        instance = new YoastProvisionerApiClient.SetProvisionedSiteDto();
      });

      it('should create an instance of SetProvisionedSiteDto', function() {
        // TODO: update the code to test SetProvisionedSiteDto
        expect(instance).to.be.a(YoastProvisionerApiClient.SetProvisionedSiteDto);
      });

      it('should have the property site (base name: "site")', function() {
        // TODO: update the code to test the property site
        expect(instance).to.have.property('site');
        // expect(instance.site).to.be(expectedValueLiteral);
      });

    });
  });

}));
