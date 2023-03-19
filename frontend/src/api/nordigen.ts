import axios from 'axios';
import {
    NORDIGEN_ENDPOINT_AGREEMENT,
    NORDIGEN_ENDPOINT_LINK,
    NORDIGEN_ENDPOINT_TOKEN,
    NORDIGEN_SECRET_ID,
    NORDIGEN_SECRET_KEY
} from '../config';

export const createToken = async (): Promise<string> => {
    try {
        const response = await axios.post(
            NORDIGEN_ENDPOINT_TOKEN,
            {
                secret_id: NORDIGEN_SECRET_ID,
                secret_key: NORDIGEN_SECRET_KEY,
            },
            {
                headers: {
                    'accept': 'application/json',
                },
            },
        );
        return response.data.access;
    } catch (error) {
        throw error;
    }
}

export const createAgreement = async (
    accessToken: string,
    institutionId: string,
    accessScope: string[],
): Promise<string> => {
    try {
        const response = await axios.post(
            NORDIGEN_ENDPOINT_AGREEMENT,
            {
                institution_id: institutionId,
                access_scope: accessScope,
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            },
        );
        return response.data.id;
    } catch (error) {
        throw error;
    }
}

export const createLink = async (
    accessToken: string,
    redirectUrl: string,
    institutionId: string,
    agreementId: string,
    userLanguage: string,
): Promise<string> => {
    try {
        const response = await axios.post(
            NORDIGEN_ENDPOINT_LINK,
            {
                redirect: redirectUrl,
                institution_id: institutionId,
                agreement: agreementId,
                user_language: userLanguage,
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            },
        );
        console.log(response);
        return response.data.link;
    } catch (error) {
        throw error;
    }
}


export const getAccounts = async (
    accessToken: string,
    requisition: string,
): Promise<any> => {
    try {
        const response = await axios.get(
            `https://ob.nordigen.com/api/v2/requisitions/${requisition}/`,
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            },
        );
        console.log(response);
        return response.data.accounts;
    } catch (error) {
        throw error;
    }
}

export const getTransactions = async (
    accessToken: string,
    accountId: string,
): Promise<any> => {
    try {
        const response = await axios.get(
            `https://ob.nordigen.com/api/v2/accounts/${accountId}/transactions/`,
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            },
        );
        console.log(response);
        return response.data.transactions;
    } catch (error) {
        throw error;
    }
}


