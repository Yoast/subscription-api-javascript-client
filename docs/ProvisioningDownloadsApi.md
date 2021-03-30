# YoastProvisionerApiClient.ProvisioningDownloadsApi

All URIs are relative to *http://my.yoast.test:3000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProvisioningDownloadsCurrentVersionGet**](ProvisioningDownloadsApi.md#apiProvisioningDownloadsCurrentVersionGet) | **GET** /api/provisioning/downloads/currentVersion | Retrieve the current version for the productCode for the provisioner.
[**apiProvisioningDownloadsCurrentZipGet**](ProvisioningDownloadsApi.md#apiProvisioningDownloadsCurrentZipGet) | **GET** /api/provisioning/downloads/currentZip | Redirect to the current zip for the productCode.

<a name="apiProvisioningDownloadsCurrentVersionGet"></a>
# **apiProvisioningDownloadsCurrentVersionGet**
> &#x27;String&#x27; apiProvisioningDownloadsCurrentVersionGet(productCode)

Retrieve the current version for the productCode for the provisioner.

This route returns the latest version of the product that is offered to the customer when using the passed productCode.

### Example
```javascript
import YoastProvisionerApiClient from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
let productCode = "productCode_example"; // String | The code used to create the product.

apiInstance.apiProvisioningDownloadsCurrentVersionGet(productCode, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProvisioningDownloadsCurrentZipGet"></a>
# **apiProvisioningDownloadsCurrentZipGet**
> &#x27;String&#x27; apiProvisioningDownloadsCurrentZipGet(productCode)

Redirect to the current zip for the productCode.

If a new version is available, you can use this route to redirect to the zip of that new version of the product.

### Example
```javascript
import YoastProvisionerApiClient from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.ProvisioningDownloadsApi();
let productCode = "productCode_example"; // String | The code used to create the product.

apiInstance.apiProvisioningDownloadsCurrentZipGet(productCode, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

