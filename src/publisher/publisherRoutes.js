import { Router } from "express";
import { addPublisher } from "../publisher/addPublisher.js";
import { deletePublisher } from "../publisher/deletePublisher.js";
import { updatePublisher } from "../publisher/updatePublisher.js";
import { getPublishers } from "../publisher/getPublishers.js";
import { fetchPublisherById } from "./fetchPublisherById.js";

const routes = Router();

routes.post("/", async (request, response) => {
  let result = await addPublisher(request.body);
  response.json(result);
});

routes.get("/:id", async (request, response) => {
  let result = await fetchPublisherById(request.params.id);
  response.json(result);
});

routes.get("/", async (request, response) => {
  let result = await getPublishers();
  response.json(result);
});

routes.delete("/", async (request, response) => {
  let result = await deletePublisher(request.body.id);
  response.json(result);
});

routes.put("/", async (request, response) => {
  let result = await updatePublisher(request.body);
  response.json(result);
});

export { routes as publisherRoutes };
