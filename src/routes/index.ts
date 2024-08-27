import { Router } from "express";
import { Request, Response } from "express";

const Routes = Router();

Routes.get("/", (_request: Request, response: Response) => {
  response.send("Hello World!");
});

export { Routes };
