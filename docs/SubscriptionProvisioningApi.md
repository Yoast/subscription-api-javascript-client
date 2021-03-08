# SubscriptionApiJavascriptClient.SubscriptionProvisioningApi

All URIs are relative to *http://my.yoast.test:3000/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProvisioningSubscriptionsCreatePost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsCreatePost) | **POST** /api/provisioning/subscriptions/create | Create a subscription
[**apiProvisioningSubscriptionsIdCancelPost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdCancelPost) | **POST** /api/provisioning/subscriptions/{id}/cancel | Cancel a single subscription
[**apiProvisioningSubscriptionsIdGet**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdGet) | **GET** /api/provisioning/subscriptions/{id} | Get a subscription
[**apiProvisioningSubscriptionsIdRenewPost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdRenewPost) | **POST** /api/provisioning/subscriptions/{id}/renew | Renew a subscription
[**apiProvisioningSubscriptionsIdSetSitePost**](SubscriptionProvisioningApi.md#apiProvisioningSubscriptionsIdSetSitePost) | **POST** /api/provisioning/subscriptions/{id}/set-site | Link a subscription to a site

<a name="apiProvisioningSubscriptionsCreatePost"></a>
# **apiProvisioningSubscriptionsCreatePost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsCreatePost(body)

Create a subscription

Creates a subscription for a customer.

### Example
```javascript
import SubscriptionApiJavascriptClient from 'Subscription-api-javascript-client';

let apiInstance = new SubscriptionApiJavascriptClient.SubscriptionProvisioningApi();
let body = new SubscriptionApiJavascriptClient.CreateProvisionedSubscriptionDto(); // CreateProvisionedSubscriptionDto | 

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
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdCancelPost(bodyid)

Cancel a single subscription

Cancel the subscription when the period ends or immediately.

### Example
```javascript
import SubscriptionApiJavascriptClient from 'Subscription-api-javascript-client';

let apiInstance = new SubscriptionApiJavascriptClient.SubscriptionProvisioningApi();
let body = new SubscriptionApiJavascriptClient.CancelProvisionedSubscriptionDto(); // CancelProvisionedSubscriptionDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdCancelPost(bodyid, (error, data, response) => {
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
import SubscriptionApiJavascriptClient from 'Subscription-api-javascript-client';

let apiInstance = new SubscriptionApiJavascriptClient.SubscriptionProvisioningApi();
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

<a name="apiProvisioningSubscriptionsIdRenewPost"></a>
# **apiProvisioningSubscriptionsIdRenewPost**
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdRenewPost(id)

Renew a subscription

Renew the subscription for a new period.

### Example
```javascript
import SubscriptionApiJavascriptClient from 'Subscription-api-javascript-client';

let apiInstance = new SubscriptionApiJavascriptClient.SubscriptionProvisioningApi();
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
> SubscriptionProvisioningResponseDto apiProvisioningSubscriptionsIdSetSitePost(bodyid)

Link a subscription to a site

Links the subscription to a customer&#x27;s website. Setting a site the the subscription will remove the site if already set.

### Example
```javascript
import SubscriptionApiJavascriptClient from 'Subscription-api-javascript-client';

let apiInstance = new SubscriptionApiJavascriptClient.SubscriptionProvisioningApi();
let body = new SubscriptionApiJavascriptClient.SetProvisionedSiteDto(); // SetProvisionedSiteDto | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiProvisioningSubscriptionsIdSetSitePost(bodyid, (error, data, response) => {
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

