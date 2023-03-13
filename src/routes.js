import { Router } from "express";
import { saveBook } from "./controller/Book/addBook.js";

const router = Router();

//Book's routes
router.post('/api/v1/book', async (request, response)=>{
    let result = await saveBook(request.body);
    response.json(result);
})

export {router}