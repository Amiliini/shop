import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Item from "../models/itemModel.js";


const itemRouter = express.Router();

itemRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const items = await Item.find({});
    res.send(items);
  })
);

itemRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Item.remove({});
    const createdItems = await Item.insertMany(data.items);
    res.send({ createdItems });
  })
);

itemRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.send(item);
    } else {
      res.status(404).send({ message: "Item Not Found" });
    }
  })
);

export default itemRouter;
