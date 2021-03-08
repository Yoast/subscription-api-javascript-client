/**
 * Yoast.com provisioning API
 * The Yoast provisioning API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CancelProvisionedSubscriptionDto from '../model/CancelProvisionedSubscriptionDto';
import CreateProvisionedSubscriptionDto from '../model/CreateProvisionedSubscriptionDto';
import SetProvisionedSiteDto from '../model/SetProvisionedSiteDto';
import SubscriptionProvisioningResponseDto from '../model/SubscriptionProvisioningResponseDto';

/**
* SubscriptionProvisioning service.
* @module api/SubscriptionProvisioningApi
* @version 1.0.0
*/
export default class SubscriptionProvisioningApi {

    /**
    * Constructs a new SubscriptionProvisioningApi. 
    * @alias module:api/SubscriptionProvisioningApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsCreatePost operation.
     * @callback module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a subscription
     * Creates a subscription for a customer.
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionProvisioningResponseDto}
     */
    apiProvisioningSubscriptionsCreatePost(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdCancelPost operation.
     * @callback module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a single subscription
     * Cancel the subscription when the period ends or immediately.
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionProvisioningResponseDto}
     */
    apiProvisioningSubscriptionsIdCancelPost(body, id, callback) {
      let postBody = body;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdGet operation.
     * @callback module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a subscription
     * Get a single subscription that was provisioned for a third party
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionProvisioningResponseDto}
     */
    apiProvisioningSubscriptionsIdGet(id, callback) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdRenewPost operation.
     * @callback module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRenewPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Renew a subscription
     * Renew the subscription for a new period.
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdRenewPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionProvisioningResponseDto}
     */
    apiProvisioningSubscriptionsIdRenewPost(id, callback) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/renew', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiProvisioningSubscriptionsIdSetSitePost operation.
     * @callback module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdSetSitePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionProvisioningResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Link a subscription to a site
     * Links the subscription to a customer&#x27;s website. Setting a site the the subscription will remove the site if already set.
     * @param {module:api/SubscriptionProvisioningApi~apiProvisioningSubscriptionsIdSetSitePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionProvisioningResponseDto}
     */
    apiProvisioningSubscriptionsIdSetSitePost(body, id, callback) {
      let postBody = body;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionProvisioningResponseDto;

      return this.apiClient.callApi(
        '/api/provisioning/subscriptions/{id}/set-site', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}