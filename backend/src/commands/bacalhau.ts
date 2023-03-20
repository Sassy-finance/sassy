import { execSh } from "."
import fs from 'fs';

export const runJob = async (cid: string, dockerImage: string) => {
    const result: any = await execSh(
        `bacalhau docker run --id-only --wait --inputs ${cid} ${dockerImage}`
    ) as any

    return result.stdout.toString().trim()
}


export const checkJobStatus = async (jobId: string) => {
    const result: any = await execSh(
        `bacalhau list --output=json --id-filter  ${jobId}`
    ) as any

    const jsonResult = JSON.parse(result.stdout.toString().trim())

    return jsonResult[0].State.State

}


export const getJobResult = async (jobId: string) => {
    await execSh(
        'rm -rf results && mkdir -p results'
    )
    const result: any = await execSh(
        `bacalhau get ${jobId} --output-dir results`
    ) as any

    const jsonString = fs.readFileSync("./results/combined_results/outputs/result.json");

    const jsonResult = JSON.parse(jsonString.toString());

    return {
        debts: jsonResult['debts'],
        colllateral: jsonResult['collateral']
    }

}