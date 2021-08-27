import * as express from 'express'
import * as bodyParse from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectarServidorDB } from './config/db'
import { routerUsuario } from './routes/usuario'

export const app = express()

app.use(cors())

app.use(bodyParse.json())

app.use(logger('dev'))

conectarServidorDB()

app.use('/usuario', routerUsuario)
app.use('/', (req, res) => res.send('Api do app juvenal'))