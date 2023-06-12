import express, { NextFunction } from "express";
import bodyParser from "body-parser";

import { AddressesRouter } from "./routers/addresses-router";
import { ProductRouter } from "./routers/products-router";

const app = express();
const port = process.env.PORT || 3000;

let requestCounter = 0;

const requestCounterMiddleware = (next: NextFunction) => {
  requestCounter++;
  next();
};

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);
app.use(requestCounterMiddleware);

app.use("/addresses", AddressesRouter);
app.use("/products", ProductRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
