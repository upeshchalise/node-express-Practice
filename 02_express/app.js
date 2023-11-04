const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  // res.json(products); ==> sends everything
  res.json(newProducts); //sends id, name, and description
});

// static
// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);
//   res.json(singleProduct);
// });

// PARAMS

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;

  const singleProduct = products.find((product) => product.id === Number(id));

  if (!singleProduct) {
    res.status(404).send("Resource doesnot exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:id/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  const { id, reviewId } = req.params;
  res.send(`you searche for product id: ${id} and its review id: ${reviewId}`);
});

// QUERY
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server has started at port 5000...");
});
