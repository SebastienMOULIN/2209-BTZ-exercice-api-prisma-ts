import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneTag: BookHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Book Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneTag;
