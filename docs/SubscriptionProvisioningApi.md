# YoastProvisionerApiClient.SubscriptionProvisioningApi

All URIs are relative to *https://my.yoast.test:3000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProvisioningSubscriptionsCreatePost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsCreatePost) | **POST** /api/provisioning/subscriptions/create | Create a subscription
[**apiProvisioningSubscriptionsIdCancelPost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdCancelPost) | **POST** /api/provisioning/subscriptions/{id}/cancel | Cancel a single subscription
[**apiProvisioningSubscriptionsIdGet**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdGet) | **GET** /api/provisioning/subscriptions/{id} | Get a subscription
[**apiProvisioningSubscriptionsIdRefundPost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdRefundPost) | **POST** /api/provisioning/subscriptions/{id}/refund | Refund a single subscription
[**apiProvisioningSubscriptionsIdRenewPost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdRenewPost) | **POST** /api/provisioning/subscriptions/{id}/renew | Renew a subscription
[**apiProvisioningSubscriptionsIdSetSitePost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdSetSitePost) | **POST** /api/provisioning/subscriptions/{id}/set-site | Link a subscription to a site

<a name="apiProvisioningSubscriptionsCreatePost"></a>
# **apiProvisioningSubscriptionsCreatePost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsCreatePost(body)

Create a subscription

Creates a subscription for a customer.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.CreateProvisionedSubscriptionDto(); // CreateProvisionedSubscriptionDto | 

apiInstance.apiProvisioningSubscriptionsCreatePost(body, (error, data, response) => {
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
 **body** | [**CreateProvisionedSubscriptionDto**](CreateProvisionedSubscriptionDto.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProvisioningSubscriptionsIdCancelPost"></a>
# **apiProvisioningSubscriptionsIdCancelPost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdCancelPost(body, id)

Cancel a single subscription

Cancel the subscription when the period ends or immediately.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.CancelProvisionedSubscriptionDto(); // CancelProvisionedSubscriptionDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdCancelPost(body, id, (error, data, response) => {
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
 **body** | [**CancelProvisionedSubscriptionDto**](CancelProvisionedSubscriptionDto.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiProvisioningSubscriptionsIdGet"></a>
# **apiProvisioningSubscriptionsIdGet**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdGet(id)

Get a subscription

Get a single subscription that was provisioned for a third party

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdGet(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProvisioningSubscriptionsIdRefundPost"></a>
# **apiProvisioningSubscriptionsIdRefundPost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdRefundPost(id)

Refund a single subscription

Refund the subscription.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdRefundPost(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProvisioningSubscriptionsIdRenewPost"></a>
# **apiProvisioningSubscriptionsIdRenewPost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdRenewPost(id)

Renew a subscription

Renew the subscription for a new period.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdRenewPost(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiProvisioningSubscriptionsIdSetSitePost"></a>
# **apiProvisioningSubscriptionsIdSetSitePost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdSetSitePost(body, id)

Link a subscription to a site

Links the subscription to a customer&#x27;s website. Setting a site the the subscription will remove the site if already set.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.SetProvisionedSiteDto(); // SetProvisionedSiteDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdSetSitePost(body, id, (error, data, response) => {
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
 **body** | [**SetProvisionedSiteDto**](SetProvisionedSiteDto.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**SubscriptionProvisioningResponseDto**](SubscriptionProvisioningResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

