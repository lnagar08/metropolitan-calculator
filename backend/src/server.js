import express from "express";
import userRouter from "./routes/user.route.js";

const app = express(); // create an express app
app.use(express.json());

// route declaration
app.use("api/v1/users", userRouter);

export default app;