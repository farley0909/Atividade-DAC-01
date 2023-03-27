import { Router } from "express";
import { addBook } from "../book/addBook.js";
import { deleteBook } from "../book/deleteBook.js";
import { updateBook } from "../book/updateBook.js";
import { fetchBookById } from "../book/fetchBookById.js";
import { getBooks } from "../book/getBooks.js";

const routes = Router();

routes.post("/", async (request, response) => {
  let result = await addBook(request.body);
  response.json(result);
});

routes.get("/:id", async (request, response) => {
  let result = await fetchBookById(request.params.id);
  response.json(result);
});

routes.get("/", async (request, response) => {
  let result = await getBooks();
  response.json(result);
});

routes.delete("/", async (request, response) => {
  let result = await deleteBook(request.body.id);
  response.json(result);
});

routes.put("/", async (request, response) => {
  let result = await updateBook(request.body);
  response.json(result);
});

export { routes as bookRoutes };
