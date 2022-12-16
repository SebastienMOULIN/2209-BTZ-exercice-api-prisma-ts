import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneBooks: BookHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await prisma.book.findUniqueOrThrow({
      where: {
        id,
      },
    });

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneBooks;
