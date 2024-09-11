import express, { NextFunction, Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
import { notFound } from "./middleware/notFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
const app = express();

//parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});
app.use(notFound);
app.use(globalErrorHandler);

export default app;
