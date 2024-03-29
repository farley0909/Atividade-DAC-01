import "ejs";
import "express-async-errors";
import express from "express";
import { apiRoutes } from "./apiRoutes.js";
import { pageRoutes } from "./pageRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "public");

app.use("/api/v1", apiRoutes);
app.use(pageRoutes);
app.use("/", express.static("public"));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

export { app };
