const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//MongoDB server Connection

mongoose.connect(
  "mongodb+srv://simplegoods:sg123@cluster0.wk46s.mongodb.net/simplegoods"
);

// API creation

app.get("/", (req, res) => {
  res.send("App is running");
});

//Image Storage

const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Endpoint for uploading images

app.use("/images", express.static("uploads/images"));
app.post("/uploads", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Product creation Schema

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discounted_price: {
    type: Number,
    required: true,
  },
  original_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

app.post("/addproduct", async (req, res) => {
  const products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_arr = products.slice(-1);
    let last_product = last_product_arr[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    discounted_price: req.body.discounted_price,
    original_price: req.body.original_price,
  });
  console.log(product);
  await product.save();
  console.log("Product saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//API for Removing Products

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//API for Listing Products

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("Product Fetched");
  res.send(products);
});

//Schema for User Model

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Creating endpoint for user registration

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "User already exists with this email-id.",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_token");
  res.json({ success: true, token });
});

//Creating endpoint for user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_token");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong Password!" });
    }
  } else {
    res.json({ success: false, error: "Wrong Email!" });
  }
});

//Middleware for fetching the user

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Token is not valid" });
  } else {
    try {
      const data = jwt.verify(token, "secret_token");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ error: "Token is not valid" });
    }
  }
};

//Creating endpoint for cart data

app.post("/addtocart", fetchUser, async (req, res) => {
  console.log("Added to cart", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added to cart");
});

//endpoint to remove product from cart

app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("Removed from cart", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed from cart");
});

//endpoint to get cart data

app.post("/getcart", fetchUser, async (req, res) => {
  console.log("Get Cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`Error while running server: ${error}`);
  }
});
