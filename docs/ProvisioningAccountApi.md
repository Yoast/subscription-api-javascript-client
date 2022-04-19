# YoastProvisionerApiClient.ProvisioningAccountApi

All URIs are relative to *https://my.yoast.test:3000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProvisioningAccountRegenerateTokenPost**](ProvisioningAccountApi.md#apiProvisioningAccountRegenerateTokenPost) | **POST** /api/provisioning/account/regenerate-token | Generate a new auth token

<a name="apiProvisioningAccountRegenerateTokenPost"></a>
# **apiProvisioningAccountRegenerateTokenPost**
> RegenerateTokenResponseDto apiProvisioningAccountRegenerateTokenPost()

Generate a new auth token

This route generate a new password for the Basic Auth that is used by provisioner accounts to authenticate with.After this route is called, the old password will NO LONGER be valid. Please store the response of this request somewhere safe!

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.ProvisioningAccountApi();
apiInstance.apiProvisioningAccountRegenerateTokenPost((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

