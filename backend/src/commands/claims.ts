import axios from 'axios';
import config from '../config';

export const generateClaim = async () => {
    try {
        try {
            const response = await axios.post(
                `https://api.dants.xyz/v1/${config.ISSUER_ID}/claims`,
                {
                    "credentialSchema": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json",
                    "type": "KYCAgeCredential",
                    "credentialSubject": {
                        "id": config.USER_ID,
                        "birthday": 19960424,
                        "documentType": 2
                    },
                    "expiration": 12345
                },
                {
                    headers: {
                        'accept': 'application/json',
                    },
                    auth: {
                        username: config.ISSUER_USER,
                        password: config.ISSUER_PASSWORD
                    }
                },
            );
            return response.data.id;
        } catch (error) {
            throw error;
        }

    } catch (err) {
        console.log(err);
        return;
    }
}