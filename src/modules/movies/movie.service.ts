import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
const createMovie = async (payload: TMovie) => {
  /* 
  Way1: Using business logic here....

   title - releaseDate
   WE will get: Inception Two 2010-07-16T00:00:00.000Z
   We want:  inception-two -2010-07-16
    
   const date = format(payload.releaseDate, "dd-MM-yyyy");

   //creating slug 
   const slug = slugify(`${payload.title}-${date}}`, {
       lower: true,
   });
   //const result = await Movie.create(payload);
*/

  /* Way3: Using instance method logic here....

  */
  const result = new Movie(payload);

  const slug = result.createSlug(payload);

  result.slug = slug;
  await result.save(); // database save

  return result;
};

const getAllMovies = async (payload: Record<string, unknown>) => {
  let searchTerm = "";
  if (payload?.searchTerm) {
    searchTerm = payload.searchTerm as string;
  }
  const searchAbleFields = ["title", "genre"];
  const searchMovies = Movie.find({
    $or: searchAbleFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  let limit: number = Number(payload?.limit);

  let skip: number = 0;
  if (payload?.page) {
    const page: number = Number(payload.page);
    skip = (page - 1) * limit;
  }

  // const skipQuery = searchMovies.skip(skip);
  // const limitQuery = skipQuery.limit(limit);
  let sortBy = "releaseDate";
  if (payload?.sortBy) {
    sortBy = payload?.sortBy as string;
  }
  // const sortQuery = limitQuery.sort(sortBy);
  let fields = "";
  if (payload.fields) {
    fields = (payload.fields as string).split(",").join(" ");
  }
  // const fieldQuery = sortQuery.select(fields);
  const queryObj = { ...payload };

  const excludeField = ["searchTerm", "page", "limit", "sortBy", "fields"];

  excludeField.forEach((e) => delete queryObj[e]);
  console.log(excludeField);

  const result = await searchMovies
    .find(queryObj)
    .skip(skip)
    .limit(limit)
    .sort(sortBy)
    .select(fields);
  console.log(result);
  return result;
};

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};
const getMovieByID = async (_id: string) => {
  const result = await Movie.findOne({ _id: _id });
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
  getMovieByID,
};
