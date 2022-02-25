# YoastProvisionerApiClient.ProvisioningUsersApi

All URIs are relative to *https://my.yoast.test:3000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProvisioningUserScheduleDeletePost**](ProvisioningUsersApi.md#apiProvisioningUserScheduleDeletePost) | **POST** /api/provisioning/user/schedule-delete | Schedule a delete for a subscription

<a name="apiProvisioningUserScheduleDeletePost"></a>
# **apiProvisioningUserScheduleDeletePost**
> SubscriptionProvisioningResponseDto apiProvisioningUserScheduleDeletePost(body)

Schedule a delete for a subscription

Schedules a customer for gdpr delete.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.ProvisioningUsersApi();
let body = new YoastProvisionerApiClient.ScheduleDeleteUserDto(); // ScheduleDeleteUserDto | 

apiInstance.apiProvisioningUserScheduleDeletePost(body, (error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

