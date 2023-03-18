import { Web3Storage } from 'web3.storage'
import { IPFS_KEY } from '../config'

export const makeFileObjects = (obj: any, fileName: string) => {
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
    const files = [
        new File([blob], fileName)
    ]

    return files
}

export const makeStorageClient = () => {
    return new Web3Storage({ token: IPFS_KEY })
}

export const storeFiles = async (files: any, name: string) => {
    const client = makeStorageClient()
    const cid = await client.put(files, { name })
    console.log('stored files with cid:', cid)
    return cid
}


export const listUploads = async () => {
    const client = makeStorageClient()
    for await (const upload of client.list()) {
        console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
    }
}