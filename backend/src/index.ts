import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import pkg from '../package.json'
import compression from 'compression'
import config from './config'
import db from './models'

import ClaimRouter from './routes/ClaimRouter'
import ClaimOfferRouter from './routes/ClaimOfferRouter'


const app = express()

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())

app.get('/', (_, res) => {
    res.send(
        `<strong><code>v${pkg.version}<br />
      </code></strong>`
    )
})

app.use('/backend/api/v1/claim', ClaimRouter)
app.use('/backend/api/v1/claimOffer', ClaimOfferRouter)


app.use((_, res) => {
    res.status(404).send()
})

db.sequelize.authenticate().then(
    app.listen(config.app.port, async () => {
        if (config.createTables === 'True') {
            // await db.sequelize.sync({ force: true })
        }
        console.log(`Sever listening`)
    })
).catch(err => console.log(`Error connecting with the db ${err}`))