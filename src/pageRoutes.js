import { Router } from "express";
import { getBooks } from "./book/getBooks.js";
import { getPublishers } from "./publisher/getPublishers.js";

const routes = Router();

routes.get("/", async (req, res) => {
  res.redirect("/livros");
});

routes.get("/livros", async (req, res) => {
  const books = await getBooks();
  res.render("book/bookPage", { books });
});

routes.get("/editoras", async (req, res) => {
  const publishers = await getPublishers();
  res.render("publisher/publisherPage", { publishers });
});

routes.get("/stale", async (req, res) => {
  const publishers = await getPublishers();
  const books = await getBooks();
  res.render("index-stale", { publishers, books });
});

export { routes as pageRoutes };
