import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { routes } from "./routes";

const app = express()

app.use(express.json())

app.use("/api-documentation",swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use(routes)

export default app;
