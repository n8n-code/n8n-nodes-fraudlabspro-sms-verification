import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class FraudlabsproSmsVerification implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fraudlabspro Sms Verification',
                name: 'N8nDevFraudlabsproSmsVerification',
                icon: { light: 'file:./fraudlabspro-sms-verification.png', dark: 'file:./fraudlabspro-sms-verification.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Send SMS verification code with custom message for payment authentication, reducing chargebacks and fraud.',
                defaults: { name: 'Fraudlabspro Sms Verification' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFraudlabsproSmsVerificationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}
