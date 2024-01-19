# YoastProvisionerApiClient.ProvisioningUsersApi

All URIs are relative to *https://my.yoast.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provisioningUsersControllerScheduleDelete**](ProvisioningUsersApi.md#provisioningUsersControllerScheduleDelete) | **POST** /api/provisioning/user/schedule-delete | Schedule a delete for a subscription

<a name="provisioningUsersControllerScheduleDelete"></a>
# **provisioningUsersControllerScheduleDelete**
> SubscriptionProvisioningResponseDto provisioningUsersControllerScheduleDelete(body)

Schedule a delete for a subscription

Schedules a customer for gdpr delete.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.ProvisioningUsersApi();
let body = new YoastProvisionerApiClient.ScheduleDeleteUserDto(); // ScheduleDeleteUserDto | 

apiInstance.provisioningUsersControllerScheduleDelete(body, (error, data, response) => {
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
 **body** | [**ScheduleDeleteUserDto**](ScheduleDeleteUserDto.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

