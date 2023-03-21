import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import config from "../config";


export const sendNotification = async (title: string, body: string) => {

    const Pkey = `0x${config.PK_SENDER}`;
    const signer = new ethers.Wallet(Pkey);

    enum ENV {
        PROD = "prod",
        STAGING = "staging",
        DEV = "dev"
    }

    const staging: ENV = ENV.STAGING;

    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 1, // broadcast
            identityType: 2, // direct payload
            notification: {
                title,
                body
            },
            payload: {
                title,
                body,
                cta: '',
                img: ''
            },
            channel: 'eip155:5:0x7C61C48919805eDC3Bd75ace9d7211Fb3b0Ed13D', // your channel address
            env: staging
        });
    } catch (err) {
        console.error('Error: ', err);
    }
}