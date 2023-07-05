import express from "express";
import path from "path";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import { __dirname } from "./utils.js";

let app = express();

// view engine setup
//VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Endpoints... colocamos en indexRouter /api
app.use("/api", indexRouter);

export default app;
