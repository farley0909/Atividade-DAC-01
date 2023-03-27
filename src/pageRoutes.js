import { Router } from "express";
import { fetchAllBooks } from "./book/fetchAllBooks.js";
import { fetchAllPublisher } from "./publisher/fetchAllPublishers.js";

const routes = Router();

routes.get("/", async (req, res) => {
  res.redirect("/livros");
});

routes.get("/livros", async (req, res) => {
  let books = await fetchAllBooks();
  res.render("index", { books });
});

routes.get("/stale", async (req, res) => {
  let publishers = await fetchAllPublisher();
  let books = await fetchAllBooks();
  res.render("index-stale", { publishers, books });
});

export { routes as pageRoutes };
