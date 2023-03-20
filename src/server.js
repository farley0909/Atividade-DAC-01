import { app } from "./app.js";
import {PORT} from './env.js'

const port = PORT || 4321
app.listen(port, ()=> console.info(`Server is running on http://localhost:${port}`))