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

import ApiClient from '../ApiClient';

/**
* The CancelProvisionedSubscriptionDto model module.
* @module model/CancelProvisionedSubscriptionDto
* @version 1.0.0
*/
export default class CancelProvisionedSubscriptionDto {
    /**
    * Constructs a new <code>CancelProvisionedSubscriptionDto</code>.
    * @alias module:model/CancelProvisionedSubscriptionDto
    * @class
    * @param immediately {Boolean} (optional) Immediately will cancel the subscription directly,otherwise it will end when the period has expired. Default is false
    */

    constructor(immediately) {
        
        
        this['immediately'] = immediately;
        
    }

    /**
    * Constructs a <code>CancelProvisionedSubscriptionDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CancelProvisionedSubscriptionDto} obj Optional instance to populate.
    * @return {module:model/CancelProvisionedSubscriptionDto} The populated <code>CancelProvisionedSubscriptionDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CancelProvisionedSubscriptionDto();
                        
            
            if (data.hasOwnProperty('immediately')) {
                obj['immediately'] = ApiClient.convertToType(data['immediately'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * (optional) Immediately will cancel the subscription directly,otherwise it will end when the period has expired. Default is false
    * @member {Boolean} immediately
    */
    'immediately' = undefined;




}