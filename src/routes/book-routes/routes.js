import { addBook } from "../../controller/Book/addBook.js";
import { fetchBookById } from "../../controller/Book/fetchBookById.js";
import { fetchAllBooks } from "../../controller/Book/fetchAllBooks.js";
import { deleteBook } from "../../controller/Book/deleteBook.js";
import { updateBook } from "../../controller/Book/updateBook.js";
import { Router } from "express";

const book_routes = Router();

book_routes.post('/api/v1/book', async (request, response)=>{
    let result = await addBook(request.body);
    response.json(result);
})
book_routes.get('/api/v1/book/:id', async (request, response)=>{
    let result = await fetchBookById(request.params.id);
    response.json(result)
})
book_routes.get('/api/v1/book', async (request, response)=>{
    let result = await fetchAllBooks();
    response.json(result)
})
book_routes.delete('/api/v1/book', async (request, response)=>{
    let result = await deleteBook(request.body.id)
    response.json(result)
})
book_routes.put('/api/v1/book', async (request, response)=>{
    let result = await updateBook(request.body);
    response.json(result)
})

export {book_routes}