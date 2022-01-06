import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import data from './data.js';
import userRouter from "./routes/userRouter.js";
import itemRouter from "./routes/itemRouter.js";



dotenv.config();

const app = express();
mongoose.connect('mongodb://localhost/shop',{});


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/items", itemRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
