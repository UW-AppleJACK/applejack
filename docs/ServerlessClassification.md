# Serverless Classification

The classification activity uses AWS to set up a serverless backend which stores the classification images, processes the classification responses, and stores those responses in a database. This documentation explains how to manually set up all required AWS resources.

*These steps could be automated using CloudFormation, the AWS CDK, or other Infrastructure-as-Code tools.*

## Lambda

Lambda runs our server-side code to process API requests for classifying images

* Create a Lambda function `mrl-saveClassification` with code `marinerescue-serverless/classification/mrl-saveClassification.js`

## DynamoDB

DynamoDB stores the results for how users classified images

* Create a DynamoDB table
   * The index should be `id` with type string

## IAM

IAM can be used to grant our Lambda function access to our DynamoDB database

* Create a IAM policy `mrl-saveClassificationPolicy` with template `marinerescue-serverless/classification/mrl-saveClassificationPolicy.json`
* Attach the IAM policy to the Lambda role

## API Gateway

API Gateway allows Lambda functions to be accessed through a REST API

* Create an API `mrl-saveClassificationAPI` with template `marinerescue-serverless/classification/mrl-saveClassificationAPI.json`

## S3

S3 stores our images for the classification activity

### Image Preparation

First, images should be prepared accordingly

* Images should be converted to png: `mogrify -format png *` (from 280MB to 1.12GB)
* Images should be resized to be 960px wide: `mogrify -resize 960 *` (from 1.12GB to 221MB)
* Images should be optimized: `optipng -o7 -strip all *` (from 221MB to 210MB)

### S3 Configuration

* Create a bucket `marinerescue-static`
    * Allow public access
* Create a directory `classification/`
    * Allow public access
* Upload images into directory
    * Allow public access

## ACM

ACM manages our SSL certificates for subdomains

* Request certificate for `static.marinerescue.app`
* Request certificate for `classification-api.marinerescue.app`
