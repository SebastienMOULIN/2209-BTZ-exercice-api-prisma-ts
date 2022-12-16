import Express from "express";

import api from "./src/api";

const app = Express();

app.use(Express.json());

// this line !!
app.use("/api/v1", api);

export default app;
