import axios from "axios";

const BREVO_API_KEY = process.env.BREVO_API_KEY;

const sendApiKey = async (email, key) => {
  
  const data = {
    sender: { email: "emanoelpi76@gmail.com" },
    to: [{ email }],
    subject: "Sua_API_key",
    htmlContent: `
     <html>
      <body>
        <h1>Sua API key</h1>
          <p>Essa é sua API key: <b>${key}</b>
          </p>
      </body>
     </html>`,
  };

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      data,
      {
        headers: {
          "api-key": `${BREVO_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao enviar o e-mail", error);
    return
  }
};

export default sendApiKey;