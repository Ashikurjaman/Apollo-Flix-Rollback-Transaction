import { z } from "zod";

const createZodMovieSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z.string().date(),
    genre: z.string(),
    isDeleted: z.boolean().optional(),
  }),
});

export const zodMovieSchema = {
  createZodMovieSchema,
};
