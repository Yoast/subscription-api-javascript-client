# YoastProvisionerApiClient.ProvisioningDownloadsApi

All URIs are relative to *https://my.yoast.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provisioningDownloadsControllerCurrentVersion**](ProvisioningDownloadsApi.md#provisioningDownloadsControllerCurrentVersion) | **GET** /api/provisioning/downloads/currentVersion | Retrieve the current version for the productCode for the provisioner.
[**provisioningDownloadsControllerCurrentVersionV2**](ProvisioningDownloadsApi.md#provisioningDownloadsControllerCurrentVersionV2) | **GET** /api/v2/provisioning/downloads/currentVersion | Get current version of downloads for a product.
[**provisioningDownloadsControllerCurrentZip**](ProvisioningDownloadsApi.md#provisioningDownloadsControllerCurrentZip) | **GET** /api/provisioning/downloads/currentZip | Redirect to the current zip for the productCode.

<a name="provisioningDownloadsControllerCurrentVersion"></a>
# **provisioningDownloadsControllerCurrentVersion**
> &#x27;String&#x27; provisioningDownloadsControllerCurrentVersion(productCode)

Retrieve the current version for the productCode for the provisioner.

This route returns the latest version of the product that is offered to the customer when using the passed productCode.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
let productCode = "productCode_example"; // String | The code used to create the product.

apiInstance.provisioningDownloadsControllerCurrentVersion(productCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| The code used to create the product. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="provisioningDownloadsControllerCurrentVersionV2"></a>
# **provisioningDownloadsControllerCurrentVersionV2**
> ProductVersionsDto provisioningDownloadsControllerCurrentVersionV2(productCode)

Get current version of downloads for a product.

This route returns the version numbers and the download URLs of the latest versions of the available downloads for a product

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
let productCode = "productCode_example"; // String | The code used to create the product.

apiInstance.provisioningDownloadsControllerCurrentVersionV2(productCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| The code used to create the product. | 

### Return type

[**ProductVersionsDto**](ProductVersionsDto.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="provisioningDownloadsControllerCurrentZip"></a>
# **provisioningDownloadsControllerCurrentZip**
> provisioningDownloadsControllerCurrentZip(productCode)

Redirect to the current zip for the productCode.

If a new version is available, you can use this route to redirect to the zip of that new version of the product.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
let productCode = "productCode_example"; // String | The code used to create the product.

apiInstance.provisioningDownloadsControllerCurrentZip(productCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCode** | **String**| The code used to create the product. | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

