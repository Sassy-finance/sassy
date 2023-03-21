import axios from 'axios';
import {
    BACKEND_URL
} from '../config';

export const createClaim = async (user: string, cid: string): Promise<string> => {
    try {
        console.log(`${BACKEND_URL}claim/create`)
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