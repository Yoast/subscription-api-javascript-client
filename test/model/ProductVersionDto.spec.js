/*
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
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
    describe('ProductVersionDto', function() {
      beforeEach(function() {
        instance = new YoastProvisionerApiClient.ProductVersionDto();
      });

      it('should create an instance of ProductVersionDto', function() {
        // TODO: update the code to test ProductVersionDto
        expect(instance).to.be.a(YoastProvisionerApiClient.ProductVersionDto);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property slug (base name: "slug")', function() {
        // TODO: update the code to test the property slug
        expect(instance).to.have.property('slug');
        // expect(instance.slug).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property downloadUrl (base name: "downloadUrl")', function() {
        // TODO: update the code to test the property downloadUrl
        expect(instance).to.have.property('downloadUrl');
        // expect(instance.downloadUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
