import { Router } from "express";
import { fetchAllBooks } from "./book/fetchAllBooks.js";
import { fetchAllPublisher } from "./publisher/fetchAllPublishers.js";

const routes = Router();

routes.get("/", async (req, res) => {
  let ediotras = await fetchAllPublisher();
  let books = await fetchAllBooks();
  res.render("index", { editoras: ediotras, books: books });
});

export { routes as pageRoutes };
