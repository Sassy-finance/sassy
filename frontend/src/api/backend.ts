import axios from 'axios';
import {
    BACKEND_URL
} from '../config';

export const createClaim = async (user: string, cid: string): Promise<string> => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}claim/create`,
            {
                user,
                cid,
            },
            {
                headers: {
                    'accept': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getPendingClaims = async (): Promise<any[]> => {
    try {
        const response = await axios.get(
            `${BACKEND_URL}claim/pendingClaim`,
            {
                headers: {
                    'accept': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createClaimOffer = async (user: string, imageId: string, claimId: string): Promise<string> => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}claimOffer/create`,
            {
                user,
                imageId,
                claimId,
            },
            {
                headers: {
                    'accept': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
