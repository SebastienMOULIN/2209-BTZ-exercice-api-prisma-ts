import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateBooks: BookHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published } = req.body;
    const books = await prisma.book.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        published,
      },
    });
    res.status(201).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateBooks;
