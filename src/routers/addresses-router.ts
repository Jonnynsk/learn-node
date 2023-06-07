import { Request, Response, Router } from "express";

const addresses = [
  { id: 1, title: "Leskova" },
  { id: 2, title: "Nikitina" },
];

export const AddressesRouter = Router();

AddressesRouter.get("/:id", (req: Request, res: Response) => {
  const address = addresses.find((p) => p.id === Number(req.params.id));
  address ? res.send(address) : res.send(404);
});
