import { Request, Response, Router } from "express";

const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "apple" },
];

export const ProductRouter = Router();

ProductRouter.get("/", (req: Request, res: Response) => {
  req.query.title
    ? res.send(
        products.filter((p) => p.title.includes(String(req.query.title)))
      )
    : res.send(products);
});

ProductRouter.post("/", (req: Request, res: Response) => {
  const newProduct = {
    id: Number(new Date()),
    title: req.body.title,
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

ProductRouter.delete("/:id", (req: Request, res: Response) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === Number(req.params.id)) {
      products.splice(i, 1);
      res.send(204);
      return;
    }
  }
  res.send(404);
});

ProductRouter.put("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (product) {
    product.title = req.body.title;
    res.send(product);
  } else {
    res.send(404);
  }
});

ProductRouter.get("/:productTitle", (req: Request, res: Response) => {
  const product = products.find((p) => p.title === req.params.productTitle);
  product ? res.send(product) : res.send(404);
});
