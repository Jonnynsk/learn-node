import { Request, Response, Router } from "express";

import { AddressesRepository } from "../repositories/addresses-repository";

export const AddressesRouter = Router();

AddressesRouter.get("/:id", (req: Request, res: Response) => {
  const address = AddressesRepository.addressById(Number(req.params.id));
  address ? res.send(address) : res.send(404);
});
