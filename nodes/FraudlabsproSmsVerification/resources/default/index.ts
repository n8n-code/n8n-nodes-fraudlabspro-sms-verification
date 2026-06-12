import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET v1 Verification Result",
					"value": "GET v1 Verification Result",
					"action": "GET v1 Verification Result",
					"description": "Verify that an OTP sent by the Send SMS Verification API is valid.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/verification/result"
						}
					}
				},
				{
					"name": "POST v1 Verification Send",
					"value": "POST v1 Verification Send",
					"action": "POST v1 Verification Send",
					"description": "Send an SMS with verification code and a custom message for authentication purpose.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/verification/send"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/verification/result",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Verification Result"
					]
				}
			}
		},
		{
			"displayName": "Tran ID",
			"name": "tran_id",
			"required": true,
			"description": "The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tran_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Verification Result"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "FraudLabs Pro API key.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Verification Result"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Returns the API response in json (default) or xml format.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Verification Result"
					]
				}
			}
		},
		{
			"displayName": "Otp",
			"name": "otp",
			"required": true,
			"description": "The OTP that was sent to the recipient’s phone.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "otp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Verification Result"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/verification/send",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
		{
			"displayName": "Country Code",
			"name": "country_code",
			"description": "ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Returns the API response in json (default) or xml format.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
		{
			"displayName": "Tel",
			"name": "tel",
			"required": true,
			"description": "The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "FraudLabs Pro API key.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
		{
			"displayName": "Mesg",
			"name": "mesg",
			"description": "The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mesg",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST v1 Verification Send"
					]
				}
			}
		},
];
