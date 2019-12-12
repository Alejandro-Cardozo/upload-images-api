import { Router } from "express";
const router = Router();

import { createPhoto, getPhotos } from "../controllers/photo.controller";

import multer from "../libs/multer";

router
  .route("/photos")
  .get(getPhotos)
  .post(multer.single("image"), createPhoto);

export default router;
