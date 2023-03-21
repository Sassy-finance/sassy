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
            where: {
                status: "CREATING"
            },
        });

        return claimsOffer

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const runningClaimsOffers = async () => { 
    try {
        const claimsOffer = await db.ClaimOffer.findAll({
            where: {
                status: "RUNNING",
            },
        });

        return claimsOffer

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const setRunning = async (id: number, jobId: string) => { 
    try {
        return db.ClaimOffer.update(
            { status: "RUNNING", jobId },
            { where: { id } }
          )

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const setFinished = async (id: number, result: string) => { 
    try {
        return db.ClaimOffer.update(
            { status: "FINISHED", result },
            { where: { id } }
          )

    } catch (error) {
        console.log(error)
        throw error
    }
}