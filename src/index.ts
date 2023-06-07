import express from "express";
import bodyParser from "body-parser";

import { AddressesRouter } from "./routers/addresses-router";
import { ProductRouter } from "./routers/products-router";

const app = express();
const port = process.env.PORT || 3000;

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.use("/addresses", AddressesRouter);
app.use("/products", ProductRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
