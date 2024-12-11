# ANALISE-IMAGES-API
Esse é um projeto back-end que descreve em detalhes imagens enviadas pelos usuários. Apenas imagens no formado JPG, JPEG e PNG são permitidos. foi usada a API do cloudinary para descrever as imagens.
## Tecnologias Usadas
- nodejs
- express
- axios
- bcrypt (para hash de senhas)
- BREVO-API (para o envio de emails)
- multer (para lidar com o processamento de arquivos)
- sequelize (um ORM)
## Endpoints
| método | endpoint | descrição |
|--------|--------|--------|
| POST | `/api/register` | registra o usuario e envia um email com sua API key que vai ser usada para ter acesso as requisições.
| POST | `api/analise-images/:text` | esse endpoint recebe um arquivo (imagem) e também um parãmetro "text". que precisará ser preenchido. abaixo vou mostrar exemplos de como usar.
## Exemplos - utilizando a ferramenta "curl"
