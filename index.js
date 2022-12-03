const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
let products = [
  {
    name: "iphone",
    price: 40000,
  },
  {
    name: "iwatch",
    price: 27486,
  },
];

app.use(express.json());

app.get("/dashboard", (req, res) => {
  res.json({ message: "welcome to dashboard" });
});

app.get("/service", (req, res) => {
  res.json({
    message:
      "welcome to services. we provide solutions are IT solutions, devops,etc...!",
  });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/create-product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json({
    message: "product created successfully",
  });
});
app.listen(3000);
