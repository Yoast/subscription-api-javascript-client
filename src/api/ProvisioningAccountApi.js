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
import ApiClient from "../ApiClient";
import RegenerateTokenResponseDto from '../model/RegenerateTokenResponseDto';

/**
* ProvisioningAccount service.
* @module api/ProvisioningAccountApi
* @version 1.0.0
*/
export default class ProvisioningAccountApi {

    /**
    * Constructs a new ProvisioningAccountApi. 
    * @alias module:api/ProvisioningAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the provisioningAccountControllerSetSiteForSubscription operation.
     * @callback moduleapi/ProvisioningAccountApi~provisioningAccountControllerSetSiteForSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegenerateTokenResponseDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a new auth token
     * This route generate a new password for the Basic Auth that is used by provisioner accounts to authenticate with.After this route is called, the old password will NO LONGER be valid. Please store the response of this request somewhere safe!
     * @param {module:api/ProvisioningAccountApi~provisioningAccountControllerSetSiteForSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    provisioningAccountControllerSetSiteForSubscription(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RegenerateTokenResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/account/regenerate-token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}