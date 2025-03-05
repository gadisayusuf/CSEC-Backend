import userModel from "../models/userModel.js";
import { connectDB } from "../config/db.js";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config()
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(process.env.PORT);
});
app.get("/getusers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.post("/adduser", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
