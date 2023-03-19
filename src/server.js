import { app } from "./app.js";

const port = process.env.port || 8080
const hostname = '0.0.0.0'
app.listen(port, hostname, ()=> console.log(`Server is running on port: ${port}...`))