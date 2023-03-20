import { Router, Request, Response } from 'express'
import { userClaims, createClaim, pendingClaims } from '../controllers/Claim';
import { IClaim } from '../models/Claim';


const router = Router()

const create = async (req: Request, res: Response) => {
    try {
        const {
            user,
            cid
        } = req.body

        const claim: IClaim = {
            user,
            cid,
            status: "CREATING",
        }
        const claimSaved = await createClaim(claim)

        return res.json(claimSaved);

    } catch (error) {
        console.log(error);
        return res.json('');
    }
}

const getUserClaims = async (req: Request, res: Response) => {
    try {
        const {
            user
        } = req.body

        const claims = await userClaims(user)

        return res.json(claims)

    } catch (error) {
        console.log(error);
    }
};

const getAllPendingClaims = async (req: Request, res: Response) => {
    try {
        const claims = await pendingClaims()

        return res.json(claims)

    } catch (error) {
        console.log(error);
    }
};

router.post('/getUserClaims', getUserClaims)
router.get('/pendingClaim', getAllPendingClaims)
router.post('/create', create)



export default router;