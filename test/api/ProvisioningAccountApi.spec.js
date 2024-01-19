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

  beforeEach(function() {
    instance = new YoastProvisionerApiClient.ProvisioningAccountApi();
  });

  describe('(package)', function() {
    describe('ProvisioningAccountApi', function() {
      describe('provisioningAccountControllerSetSiteForSubscription', function() {
        it('should call provisioningAccountControllerSetSiteForSubscription successfully', function(done) {
          // TODO: uncomment provisioningAccountControllerSetSiteForSubscription call and complete the assertions
          /*

          instance.provisioningAccountControllerSetSiteForSubscription(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(YoastProvisionerApiClient.RegenerateTokenResponseDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
