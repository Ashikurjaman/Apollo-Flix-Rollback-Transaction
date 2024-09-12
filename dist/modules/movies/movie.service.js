"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieServices = void 0;
const movie_model_1 = require("./movie.model");
const createMovie = (payload) => __awaiter(void 0, void 0, void 0, function* () {
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
    const result = new movie_model_1.Movie(payload);
    const slug = result.createSlug(payload);
    result.slug = slug;
    yield result.save(); // database save
    return result;
});
const getAllMovies = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let searchTerm = "";
    if (payload === null || payload === void 0 ? void 0 : payload.searchTerm) {
        searchTerm = payload.searchTerm;
    }
    const searchAbleFields = ["title", "genre"];
    const searchMovies = movie_model_1.Movie.find({
        $or: searchAbleFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: "i" },
        })),
    });
    let limit = Number(payload === null || payload === void 0 ? void 0 : payload.limit);
    let skip = 0;
    if (payload === null || payload === void 0 ? void 0 : payload.page) {
        const page = Number(payload.page);
        skip = (page - 1) * limit;
    }
    // const skipQuery = searchMovies.skip(skip);
    // const limitQuery = skipQuery.limit(limit);
    let sortBy = "releaseDate";
    if (payload === null || payload === void 0 ? void 0 : payload.sortBy) {
        sortBy = payload === null || payload === void 0 ? void 0 : payload.sortBy;
    }
    // const sortQuery = limitQuery.sort(sortBy);
    let fields = "";
    if (payload.fields) {
        fields = payload.fields.split(",").join(" ");
    }
    // const fieldQuery = sortQuery.select(fields);
    const queryObj = Object.assign({}, payload);
    const excludeField = ["searchTerm", "page", "limit", "sortBy", "fields"];
    excludeField.forEach((e) => delete queryObj[e]);
    console.log(excludeField);
    const result = yield searchMovies
        .find(queryObj)
        .skip(skip)
        .limit(limit)
        .sort(sortBy)
        .select(fields);
    console.log(result);
    return result;
});
const getMovieBySlug = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findOne({ slug: slug });
    return result;
});
const getMovieByID = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.Movie.findOne({ _id: _id });
    return result;
});
exports.MovieServices = {
    createMovie,
    getAllMovies,
    getMovieBySlug,
    getMovieByID,
};
