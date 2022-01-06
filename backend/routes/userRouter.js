import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from "bcryptjs";
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from "../utils/utils.js";

const userRouter = express.Router();

//Some data for database
userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

//GET all users
userRouter.get(
  '/',
  expressAsyncHandler(async(reg, res) => { 
    const users = await User.find({});
    res.send(users)
  })
)

//GET a user


//POST make a user

//PUT update specific user

//DELETE specific user



export default userRouter;

