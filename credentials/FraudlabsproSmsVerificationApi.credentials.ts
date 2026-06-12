import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FraudlabsproSmsVerificationApi implements ICredentialType {
        name = 'N8nDevFraudlabsproSmsVerificationApi';

        displayName = 'Fraudlabspro Sms Verification API';

        icon: Icon = { light: 'file:../nodes/FraudlabsproSmsVerification/fraudlabspro-sms-verification.png', dark: 'file:../nodes/FraudlabsproSmsVerification/fraudlabspro-sms-verification.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.fraudlabspro.com',
                        required: true,
                        placeholder: 'https://api.fraudlabspro.com',
                        description: 'The base URL of your Fraudlabspro Sms Verification API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
