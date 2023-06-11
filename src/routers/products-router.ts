import { Request, Response, Router } from "express";

import { ProductsRepository } from "../repositories/products-repository";

export const ProductRouter = Router();

ProductRouter.get("/", (req: Request, res: Response) => {
  const foundProducts = ProductsRepository.findProducts(
    String(req.query.title)
  );
  res.send(foundProducts);
});

ProductRouter.post("/", (req: Request, res: Response) => {
  const newProduct = ProductsRepository.createProduct(req.body.title);
  res.status(201).send(newProduct);
});

ProductRouter.delete("/:id", (req: Request, res: Response) => {
  const isDeleted = ProductsRepository.deleteProduct(Number(req.params.id));
  isDeleted ? res.send(204) : res.send(404);
});

ProductRouter.put("/:id", (req: Request, res: Response) => {
  const isUpdated = ProductsRepository.updateProduct(
    Number(req.params.id),
    req.body.title
  );
  if (isUpdated) {
    const product = ProductsRepository.productById(Number(req.params.id));
    res.send(product);
  } else {
    res.send(404);
  }
});

ProductRouter.get("/:id", (req: Request, res: Response) => {
  const product = ProductsRepository.productById(Number(req.params.id));
  product ? res.send(product) : res.send(404);
});
