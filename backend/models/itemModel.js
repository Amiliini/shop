import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    isbn: { type: Number, required: true, unique:true },
    
  },

);
const Product = mongoose.model("Product", productSchema);

export default Product;
