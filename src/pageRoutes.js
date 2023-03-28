import { Router } from "express";
import { addBook } from "./book/addBook.js";
import { deleteBook } from "./book/deleteBook.js";
import { fetchBookById } from "./book/fetchBookById.js";
import { getBooks } from "./book/getBooks.js";
import { updateBook } from "./book/updateBook.js";
import { addPublisher } from "./publisher/addPublisher.js";
import { deletePublisher } from "./publisher/deletePublisher.js";
import { fetchPublisherById } from "./publisher/fetchPublisherById.js";
import { getPublishers } from "./publisher/getPublishers.js";
import { updatePublisher } from "./publisher/updatePublisher.js";

const routes = Router();

routes.get("/", async (req, res) => {
  res.redirect("/livros");
});

routes.get("/livros", async (req, res) => {
  const { q, id } = req.query;
  const books = await getBooks(q);
  const book = id ? await fetchBookById(id) : undefined;
  res.render("book/bookPage", { book, books, q });
});

routes.get("/editoras", async (req, res) => {
  const { q, id } = req.query;
  const publishers = await getPublishers(q);
  const publisher = id ? await fetchPublisherById(id) : undefined;
  res.render("publisher/publisherPage", { publisher, publishers, q });
});

routes.use("/books/create", async (req, res) => {
  await addBook(req.body);
  res.redirect("/livros");
});

routes.use("/books/:id/delete", async (req, res) => {
  await deleteBook(req.params.id);
  res.redirect("/livros");
});

routes.use("/books/put", async (req, res) => {
  await updateBook(req.body);
  res.redirect("/livros");
});

routes.use("/publishers/put", async (req, res) => {
  await updatePublisher(req.body);
  res.redirect("/editoras");
});

routes.use("/publishers/create", async (req, res) => {
  await addPublisher(req.body);
  res.redirect("/editoras");
});

routes.use("/publishers/:id/delete", async (req, res) => {
  await deletePublisher(req.params.id);
  res.redirect("/editoras");
});

export { routes as pageRoutes };
