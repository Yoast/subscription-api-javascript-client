# YoastProvisionerApiClient.SubscriptionProvisioningResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | The subscription ID to be used privately. | 
**subscriptionNumber** | **String** | The subscription invoice number, can be communicated publicly. | 
**status** | **String** | The status of the subscription. | 
**startDate** | [**ModelInt**](ModelInt.md) | The date the subscription has started. | 
**endDate** | [**ModelInt**](ModelInt.md) | The date the subscription will expire. | 
**pluginDownloadUrls** | **[String]** | The URLs for the latest version of the download for the products in the subscription. | 
**siteUrl** | **String** | The URL for the site connected to this subscription. | 
