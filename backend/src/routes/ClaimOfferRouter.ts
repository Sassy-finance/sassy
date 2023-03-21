import { Router, Request, Response } from 'express'
import { createClaimOffer, pendingClaimsOffers} from '../controllers/ClaimOffer';
import { IClaimOffer } from '../models/ClaimOffer';

const router = Router()

const create = async (req: Request, res: Response) => {
    try {
        const {
            user,
            imageId,
            claimId
        } = req.body

        const claimOffer: IClaimOffer = {
            user,
            status: "CREATING",
            jobId: "",
            imageId,
            result: "",
            claimId
        }

        const claimSaved = await createClaimOffer(claimOffer)

        return res.json(claimSaved);

    } catch (error) {
        console.log(error);
        return res.json('');
    }
}


const getAllPendingClaimsOffer = async (req: Request, res: Response) => {
    try {
        const claims = await pendingClaimsOffers()

        return res.json(claims)

    } catch (error) {
        console.log(error);
    }
};

router.get('/pendingClaimOffer', getAllPendingClaimsOffer)
router.post('/create', create)


export default router;