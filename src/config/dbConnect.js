import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leo:1234@cluster0.kjpqzss.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;