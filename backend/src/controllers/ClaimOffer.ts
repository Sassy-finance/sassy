import db from '../models'
import { IClaimOffer } from '../models/ClaimOffer'

export const createClaimOffer = async (claimOffer: IClaimOffer) => {
    try {

        const claimofferSaved = await db.ClaimOffer.create(claimOffer)

        return claimofferSaved

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const pendingClaimsOffers = async () => { 
    try {
        const claimsOffer = await db.ClaimOffer.findAll({

        });

        return claimsOffer

    } catch (error) {
        console.log(error)
        throw error
    }
}