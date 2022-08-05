import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";
import apiSwagger from "./apiSwagger";

const app = express();


	app.use(express.json())


	app.use(routes)
	app.use(apiSwagger)

	app.listen(3000, () => console.log("servidor ok"));
