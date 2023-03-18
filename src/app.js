import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import { book_routes } from './routes/book-routes/routes.js';
import { publisher_routes } from './routes/publisher-routes/routes.js';
import ejs from 'ejs'



const app = express();
app.use(express.json());
app.use(book_routes)
app.use(publisher_routes)
app.set('view engine', 'ejs');
app.set('views', 'public');
export { app };