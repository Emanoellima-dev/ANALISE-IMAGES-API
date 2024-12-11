import axios from "axios";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import cloudinary from "../utils/cloudinaryConfig.js";
import User from "../models/models.js";
import sendApiKey from "../services/sendApiKey.js";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;

  const baseUrl = `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v2/analysis/${CLOUD_NAME}/analyze/ai_vision_general`

export const register = async (req, res) => {
  const { nome, email, senha } = req.body;
  const apiKey = crypto.randomBytes(32).toString("hex");
  const hashedApiKey = await bcrypt.hash(apiKey, 10);
  const hashedPassword = await bcrypt.hash(senha, 10);
  
  /*const user = await User.findOne({ where: { email: email } });
  if(user) return res.status(409).json({ message: "usuário ja registrado!" });*/
  
  await User.create({ nome, email, senha: hashedPassword, apiKey: hashedApiKey })
  await sendApiKey(email, apiKey)
  .then(response => {
    res.status(200).json({ message: "registro feito com sucesso! sua API key foi enviada para seu email!" });
  })
  .catch(error => {
    res.status(400).json({ error: "erro ao fazer o registro! verifique os dados e tente novamente" });
  });
};

export const analiseImages = async (req, res) => {
  try {
    
    const { text } = req.params;
    
    if (!req.file) {
      return res.status(400).send("Nenhum arquivo enviado!");
    }
 
   const imageUrl = req.file.path;
   
   const data = {
     source: {
      uri: `${imageUrl}`
    },
     prompts: [
       "descreva a imagem em detalhes",
       `${text}?`,
    ]
  };
 
   const response = await axios.post(baseUrl, data, {
     headers: {
      "Content-Type": "application/json",
     }
   })
 
    const responses = response.data.data.analysis.responses;

    res.status(200).json({
      message: responses,
    });
  }catch(error){
    res.status(500).json({ error: "Erro ao processar a imagem" });
  };
};