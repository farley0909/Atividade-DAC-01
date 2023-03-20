import { app } from "./app.js";
import { PORT } from "./env.js";

const port = PORT || 8080;
app.listen(port, () =>
  console.info(`Server is running on http://localhost:${port}`)
);
