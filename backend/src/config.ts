import * as dotenv from 'dotenv'
dotenv.config()


const config = {
  app: { port: 4001 },
  db: {
    database: process.env.DATABASE || "sassy",
    userName: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "1234",
    host: process.env.DATABASE_HOST || "localhost"
  },
  createTables: process.env.CREATE_TABLES || false,
  ISSUER_ID: process.env.ISSUER_ID || 'did:polygonid:polygon:mumbai:2qCgpd8ky4FwdtrFJc8RRb2M7cZUEMRMFUoPiTSfgx',
  USER_ID: process.env.USER_ID || 'did:polygonid:polygon:mumbai:2qGaWnwjeASE17q29YhrGe1Kan64PYUCwLLi3CQxPD',
  ISSUER_USER: process.env.ISSUER_USER || 'user',
  ISSUER_PASSWORD: process.env.ISSUER_USER || 'password',
  PK_SENDER: process.env.PK_SENDER || ''
}

export default config