"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodMovieSchema = void 0;
const zod_1 = require("zod");
const createZodMovieSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        releaseDate: zod_1.z.string().date(),
        genre: zod_1.z.string(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.zodMovieSchema = {
    createZodMovieSchema,
};
