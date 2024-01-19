# YoastProvisionerApiClient.ProvisioningAccountApi

All URIs are relative to *https://my.yoast.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provisioningAccountControllerSetSiteForSubscription**](ProvisioningAccountApi.md#provisioningAccountControllerSetSiteForSubscription) | **POST** /api/provisioning/account/regenerate-token | Generate a new auth token

<a name="provisioningAccountControllerSetSiteForSubscription"></a>
# **provisioningAccountControllerSetSiteForSubscription**
> RegenerateTokenResponseDto provisioningAccountControllerSetSiteForSubscription()

Generate a new auth token

This route generate a new password for the Basic Auth that is used by provisioner accounts to authenticate with.After this route is called, the old password will NO LONGER be valid. Please store the response of this request somewhere safe!

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.ProvisioningAccountApi();
apiInstance.provisioningAccountControllerSetSiteForSubscription((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegenerateTokenResponseDto**](RegenerateTokenResponseDto.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

