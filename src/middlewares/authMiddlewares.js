import User from "../models/models.js";
import bcrypt from "bcryptjs";

const authenticate = async (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        return res.status(401).json({ message: "API Key não fornecida." });
    }

    try {
        const users = await User.findAll();
        let authenticatedUser;
        for (const user of users) {
          const isMatch = await bcrypt.compare(apiKey, user.apiKey);
          if (isMatch) {
            authenticatedUser = user;
            break;
          }
        }

        if (!authenticatedUser) {
            return res.status(401).json({ error: "API Key inválida!" });
        }

        req.user = authenticatedUser;
        next();
    } catch (error) {
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
};


export default authenticate;