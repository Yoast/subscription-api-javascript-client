# YoastProvisionerApiClient.SubscriptionProvisioningApi

All URIs are relative to *https://my.yoast.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionProvisioningControllerCancelSubscription**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerCancelSubscription) | **POST** /api/provisioning/subscriptions/{id}/cancel | Cancel a single subscription
[**subscriptionProvisioningControllerCreate**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerCreate) | **POST** /api/provisioning/subscriptions/create | Create a subscription
[**subscriptionProvisioningControllerGetOne**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerGetOne) | **GET** /api/provisioning/subscriptions/{id} | Get a subscription
[**subscriptionProvisioningControllerRefundSubscription**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerRefundSubscription) | **POST** /api/provisioning/subscriptions/{id}/refund | Refund a single subscription
[**subscriptionProvisioningControllerRenewSubscription**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerRenewSubscription) | **POST** /api/provisioning/subscriptions/{id}/renew | Renew a subscription
[**subscriptionProvisioningControllerSetSiteForSubscription**](SubscriptionProvisioningApi.md#subscriptionProvisioningControllerSetSiteForSubscription) | **POST** /api/provisioning/subscriptions/{id}/set-site | Link a subscription to a site

<a name="subscriptionProvisioningControllerCancelSubscription"></a>
# **subscriptionProvisioningControllerCancelSubscription**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerCancelSubscription(body, id)

Cancel a single subscription

Cancel the subscription when the period ends, or immediately if that is requested, or the subscription is not valid

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.CancelProvisionedSubscriptionDto(); // CancelProvisionedSubscriptionDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.subscriptionProvisioningControllerCancelSubscription(body, id, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionProvisioningControllerCreate"></a>
# **subscriptionProvisioningControllerCreate**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerCreate(body)

Create a subscription

Creates a subscription for a customer.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.CreateProvisionedSubscriptionDto(); // CreateProvisionedSubscriptionDto | 

apiInstance.subscriptionProvisioningControllerCreate(body, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriptionProvisioningControllerGetOne"></a>
# **subscriptionProvisioningControllerGetOne**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerGetOne(id)

Get a subscription

Get a single subscription that was provisioned for a third party

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.subscriptionProvisioningControllerGetOne(id, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionProvisioningControllerRefundSubscription"></a>
# **subscriptionProvisioningControllerRefundSubscription**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerRefundSubscription(id)

Refund a single subscription

Refund the subscription.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.subscriptionProvisioningControllerRefundSubscription(id, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionProvisioningControllerRenewSubscription"></a>
# **subscriptionProvisioningControllerRenewSubscription**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerRenewSubscription(id)

Renew a subscription

Renew the subscription for a new period.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.subscriptionProvisioningControllerRenewSubscription(id, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionProvisioningControllerSetSiteForSubscription"></a>
# **subscriptionProvisioningControllerSetSiteForSubscription**
> SubscriptionProvisioningResponseDto subscriptionProvisioningControllerSetSiteForSubscription(body, id)

Link a subscription to a site

Links the subscription to a customer&#x27;s website. Setting a site the the subscription will remove the site if already set.

### Example
```javascript
import {YoastProvisionerApiClient} from 'Yoast provisioner API client';
let defaultClient = YoastProvisionerApiClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new YoastProvisionerApiClient.SubscriptionProvisioningApi();
let body = new YoastProvisionerApiClient.SetProvisionedSiteDto(); // SetProvisionedSiteDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.subscriptionProvisioningControllerSetSiteForSubscription(body, id, (error, data, response) => {
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

