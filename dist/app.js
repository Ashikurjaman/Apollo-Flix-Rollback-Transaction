"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = require("./modules/user/user.route");
const express_1 = __importDefault(require("express"));
const movie_route_1 = require("./modules/movies/movie.route");
const notFound_1 = require("./middleware/notFound");
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use("/api/movies", movie_route_1.MovieRoutes);
app.use("/api/users", user_route_1.userRouter);
app.get("/", (req, res) => {
    res.send("Hello Next!");
});
app.use(notFound_1.notFound);
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
