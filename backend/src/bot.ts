
import { runJob, checkJobStatus, getJobResult } from './commands/bacalhau'
import { generateClaim } from './commands/claims'
import { sendNotification } from './commands/push'
import { getClaim } from './controllers/Claim'
import { pendingClaimsOffers, setRunning, runningClaimsOffers, setFinished } from './controllers/ClaimOffer'
import db from './models'

const createBacalhauJob = async () => {

    const pending = await pendingClaimsOffers()

    for (const offer of pending) {
        const claim = await getClaim(offer.dataValues.claimId)
        const jobId = await runJob(claim[0].dataValues.cid, offer.dataValues.imageId)
        await setRunning(offer.dataValues.claimId, jobId)
    }
}

const checkRunningJobs = async () => {

    const running = await runningClaimsOffers()

    for (const job of running) {
        const status = await checkJobStatus(job.dataValues.jobId)
        if (status === 'Completed') {
            const result = await getJobResult(job.dataValues.jobId)
            await setFinished(job.dataValues.id, JSON.stringify(result))
            const claim = await generateClaim()
            console.log(claim)
            sendNotification(
                "Claim generated!",
                "A validator has created a new claim offer, go to https://sassy-003720.spheron.app/ to add it to your wallet"
            )
        }
    }
}

function check() {
    checkRunningJobs()
    createBacalhauJob()
    setTimeout(check, 30000);
}

db.sequelize.authenticate().then(
    check()
).catch(err => console.log(`Error connecting with the db ${err}`))