import { execSh } from "."

export const runJob = async (cid: string, dockerImage: string) => {
    const result: any = await execSh(
        `bacalhau docker run --id-only --wait --input-urls=${cid} ${dockerImage}`
    ) as any

    return result.stdout.toString().trim()
}


export const checkJobStatus = async (jobId: string) => {
    const result: any = await execSh(
        `bacalhau list ${jobId} --output=json | jq '.[0].Status.JobState.Nodes[] | .Shards."0" | select(.RunOutput)'`
    ) as any

    return result.stdout.toString().trim()

}