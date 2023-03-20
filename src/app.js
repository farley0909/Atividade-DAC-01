import "ejs";
import express from "express";
import { apiRoutes } from "./apiRoutes.js";
import { pageRoutes } from "./pageRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/v1", apiRoutes);
app.use(pageRoutes);
app.set("view engine", "ejs");
app.set("views", "public");
app.use(express.static("public"));

export { app };
