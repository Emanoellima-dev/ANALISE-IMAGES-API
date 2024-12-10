import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../utils/cloudinaryConfig.js";
import authenticate from "../middlewares/authMiddlewares.js";
import { register, analiseImages } from "../controllers/controller.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
    public_id: (req, file) => {
      const originalName = file.originalname.split(".").slice(0, -1).join(".");
      return Date.now() + "-" + originalName;
    },
 },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de arquivo não suportado"), false);
    }
  },
});

router.post("/register", register);
router.post("/analise-images/:text", authenticate, upload.single("file"), analiseImages);


export default router;