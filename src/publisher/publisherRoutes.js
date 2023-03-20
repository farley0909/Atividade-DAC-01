import { Router } from "express";
import { addPublisher } from "../publisher/addPublisher.js";
import { deletePublisher } from "../publisher/deletePublisher.js";
import { updatePublisher } from "../publisher/updatePublisher.js";
import { fetchAllPublisher } from "../publisher/fetchAllPublishers.js";
import { fetchPublisherByCode } from "../publisher/fetchPublisherByCode.js";

const routes = Router();

routes.post("/", async (request, response) => {
  let result = await addPublisher(request.body);
  response.json(result);
});

routes.get("/:code", async (request, response) => {
  let result = await fetchPublisherByCode(request.params.code);
  response.json(result);
});

routes.get("/", async (request, response) => {
  let result = await fetchAllPublisher();
  response.json(result);
});

routes.delete("/", async (request, response) => {
  let result = await deletePublisher(request.body.codigo);
  response.json(result);
});

routes.put("/", async (request, response) => {
  let result = await updatePublisher(request.body);
  response.json(result);
});

export { routes as publisherRoutes };
