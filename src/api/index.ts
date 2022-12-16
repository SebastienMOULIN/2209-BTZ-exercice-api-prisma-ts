import { Router } from "express";

import book from "./book/routes";

const router = Router();

router.use("/books", book);

export default router;
