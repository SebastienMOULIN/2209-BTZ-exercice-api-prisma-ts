import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createBooks: BookHandlers["create"] = async (req, res) => {
  try {
    const { title, content, published, authorId, collectionId } = req.body;
    const newbook = await prisma.book.create({
      data: {
        title,
        content,
        published,
        author: {
          connect: {
            id: authorId,
          },
        },
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });
    res.status(201).json(newbook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createBooks;
