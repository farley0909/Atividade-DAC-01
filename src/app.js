import * as dotenv from 'dotenv' 
dotenv.config()
import {router} from '../src/routes.js'
import express from 'express'


const app = express();
app.use(express.json());
app.use(router)
export { app };