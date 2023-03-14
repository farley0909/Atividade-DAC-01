import { Router } from "express";
import { addPublisher } from "../../controller/Publisher/addPublisher.js";
import { fetchPublisherByCode } from "../../controller/Publisher/fetchPublisherByCode.js";
import { fetchAllPublisher } from "../../controller/Publisher/fetchAllPublishers.js";
import { deletePublisher } from "../../controller/Publisher/deletePublisher.js";
import { updatePublisher } from "../../controller/Publisher/updatePublisher.js";

const publisher_routes = Router();

publisher_routes.post('/api/v1/publisher/', async (request, response)=>{
    let result = await addPublisher(request.body);
    response.json(result);
})
publisher_routes.get('/api/v1/publisher/:code', async (request, response)=>{
    let result = await fetchPublisherByCode(request.params.code);
    response.json(result);
})
publisher_routes.get('/api/v1/publisher/', async (request, response)=>{
    let result = await fetchAllPublisher();
    response.json(result)
})
publisher_routes.delete('/api/v1/publisher/', async (request, response)=>{
    let result = await deletePublisher(request.body.codigo);
    response.json(result)
})
publisher_routes.put('/api/v1/publisher/', async (request, response)=>{
    let result = await updatePublisher(request.body);
    response.json(result)
})

export {publisher_routes}