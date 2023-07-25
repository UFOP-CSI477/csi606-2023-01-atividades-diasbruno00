import express from 'express';
import routes from "./routes/routes.js";
import cors from "cors"

const app = express();
const port = 5555;

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`);
});