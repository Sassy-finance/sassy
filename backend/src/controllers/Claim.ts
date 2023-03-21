import db from '../models'
import { IClaim } from '../models/Claim'

export const createClaim = async (claim: IClaim) => {
    try {

        const claimSaved = await db.Claim.create(claim)

        return claimSaved

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const getClaim = async (id: number) => { 
    try {
        const claim = await db.Claim.findAll({
            where: {
                id
            }
        });

        return claim

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const pendingClaims = async () => { 
    try {
        const claims = await db.Claim.findAll({
            where: {
                status: 'CREATING'
            },
            include: [
                db.ClaimOffer
            ]
        });

        return claims

    } catch (error) {
        console.log(error)
        throw error
    }
}


export const userClaims = async (user: string) => { 
    try {
        const claims = await db.Claim.findAll({
            where: {
                user: user
            },
            include: [
                db.ClaimOffer
            ]
        });

        return claims

    } catch (error) {
        console.log(error)
        throw error
    }
}