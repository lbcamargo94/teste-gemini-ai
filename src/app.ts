import "express-async-errors";
import cors from "cors";
import express from "express";
import HandleError from "@middleware/error";
import helmet from "helmet";
import { Routes } from "./routes";
import { corsOptions } from "@config/server/corsConfig";

const app: express.Express = express();
const { handleError } = new HandleError();

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(Routes);
app.use(handleError);

export { app };
