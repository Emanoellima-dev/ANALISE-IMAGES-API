import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import sequelize from "./src/config/database.js";
import routes from "./src/routes/routes.js";
import authenticate from "./src/middlewares/authMiddlewares.js";

const app = express();
const PORT = process.env.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Muitas requisições feitas. Por favor, tente novamente mais tarde.",
  headers: true,
});

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use("/api", routes);

//conexao com o banco de dados
async function connectDB(){
  await sequelize.authenticate()
  .then(response => {
    console.log("conexao com o banco de dados bem sucedida!");
  })
  .catch(error => {
    console.error("erro ao se conectar com o banco de dados", error);
  });
}

connectDB();

app.listen(PORT, () => {
  console.log("O servidor está ativo");
});