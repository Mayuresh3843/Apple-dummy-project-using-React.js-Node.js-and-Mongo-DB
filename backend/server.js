const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb+srv://salvankar38:Mayuresh123@cluster0.uweswjo.mongodb.net/productsDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
});

const Product = mongoose.model("Product", productSchema);

// API route to get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// API to add new product (for testing)
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
