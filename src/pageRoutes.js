import { Router } from "express";
import { addBook } from "./book/addBook.js";
import { deleteBook } from "./book/deleteBook.js";
import { getBooks } from "./book/getBooks.js";
import { deletePublisher } from "./publisher/deletePublisher.js";
import { getPublishers } from "./publisher/getPublishers.js";

const routes = Router();

routes.get("/", async (req, res) => {
  res.redirect("/livros");
});

routes.get("/livros", async (req, res) => {
  const { q } = req.query;
  const books = await getBooks(q);
  res.render("book/bookPage", { books, q });
});

routes.use("/books/create", async (req, res) => {
  console.log(req.body);
  await addBook(req.body);
  res.redirect("/livros");
});

routes.use("/books/:id/delete", async (req, res) => {
  await deleteBook(req.params.id);
  res.redirect("/livros");
});

routes.use("/publisher/:id/delete", async (req, res) => {
  await deletePublisher(req.params.id);
  res.redirect("/editoras");
});

routes.get("/editoras", async (req, res) => {
  const { q } = req.query;
  const publishers = await getPublishers(q);
  res.render("publisher/publisherPage", { publishers, q });
});

routes.get("/stale", async (req, res) => {
  const publishers = await getPublishers();
  const books = await getBooks();
  res.render("index-stale", { publishers, books });
});

export { routes as pageRoutes };
