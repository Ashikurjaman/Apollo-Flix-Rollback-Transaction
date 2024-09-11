import { Request, Response } from "express";
import { MovieServices } from "./movie.service";
import { catchAsync } from "../../Utility/catchAsync";
import { z } from "zod";

const createMovie = catchAsync(async (req: Request, res: Response) => {
  const movieData = req.body;

  const result = await MovieServices.createMovie(movieData);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
});

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies(req.query);

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

const getMovieBySlug = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const result = await MovieServices.getMovieBySlug(slug);

  res.status(200).json({
    success: true,
    message: "Movies are fetched successfully !",
    data: result,
  });
});
const getMovieById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const result = await MovieServices.getMovieByID(id);

  res.status(200).json({
    success: true,
    message: "Movies are fetched fff successfully !",
    data: result,
  });
});

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
  getMovieById,
};
