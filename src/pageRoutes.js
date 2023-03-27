import { Router } from "express";
import { getBooks } from "./book/getBooks.js";
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
