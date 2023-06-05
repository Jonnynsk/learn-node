import express, { Request, Response } from "express";
import bodyParser from "body-parser";

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

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.get("/products", (req: Request, res: Response) => {
  req.query.title
    ? res.send(
        products.filter((p) => p.title.includes(String(req.query.title)))
      )
    : res.send(products);
});

app.post("/products", (req: Request, res: Response) => {
  const newProduct = {
    id: Number(new Date()),
    title: req.body.title,
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.delete("/products/:id", (req: Request, res: Response) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === Number(req.params.id)) {
      products.splice(i, 1);
      res.send(204);
      return;
    }
  }
  res.send(404);
});

app.put("/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (product) {
    product.title = req.body.title;
    res.send(product);
  } else {
    res.send(404);
  }
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
