import { RequestHandler } from "express";
import { Book } from "@prisma/client";

type BookBodyUpdate = {
  title: string;
  content: string;
  published: boolean;
};

type BookBodyCreate = {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  collectionId: string;
};

type ResponseError = {
  message: string | unknown;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
  delete: RequestHandler<
    { id: string },
    { message: string } | ResponseError,
    null
  >;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBodyUpdate>;
}
