import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "apple" },
];
const addresses = [
  { id: 1, title: "Leskova" },
  { id: 2, title: "Nikitina" },
];

app.get("/products", (req: Request, res: Response) => {
  req.query.title
    ? res.send(products.filter((p) => p.title.includes(String(req.query.title))))
    : res.send(products);
});

app.get("/products/:productTitle", (req: Request, res: Response) => {
  const product = products.find((p) => p.title === req.params.productTitle);
  product ? res.send(product) : res.send(404);
});

app.get("/addresses/:id", (req: Request, res: Response) => {
  const address = addresses.find((p) => p.id === Number(req.params.id));
  address ? res.send(address) : res.send(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
