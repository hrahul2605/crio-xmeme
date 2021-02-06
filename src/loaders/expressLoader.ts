import express from "express";
import cors from "cors";

export default async (app: express.Application) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  return app;
};
