import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/user.router.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
dotenv.config();

//routes import

//route declaration
app.use("/api/v1/users", router);

export { app };
