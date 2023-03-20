import { Router } from "express";
import { bookRoutes } from "./book/bookRoutes.js";
import { publisherRoutes } from "./publisher/publisherRoutes.js";

const routes = Router();

routes.use("/book", bookRoutes);
routes.use("/publisher", publisherRoutes);

export { routes as apiRoutes };
