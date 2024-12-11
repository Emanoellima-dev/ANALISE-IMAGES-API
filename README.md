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
fazendo o registro o recebendo a API key por email:

<img src="https://github.com/Emanoellima-dev/ANALISE-IMAGES-API/blob/main/imagens/Screenshot_20241211-102146-1.jpg" width="400"/>

verifique se você digitou seu email corretamente para evitar falhas no envio da API key.

após receber a API key você deve usa-la para fazer as requisições. veja no exemplo abaixo.
vamos analisar essa imagem:
<img src="https://github.com/Emanoellima-dev/ANALISE-IMAGES-API/blob/main/imagens/cld-sample-3.jpg" width="400"/>

usando a API para analisar essa imagem:
<img src="https://github.com/Emanoellima-dev/ANALISE-IMAGES-API/blob/main/imagens/Screenshot_20241211-102304-1.jpg" width="400"/>

a resposta será:

<img src"https://github.com/Emanoellima-dev/ANALISE-IMAGES-API/blob/main/imagens/Screenshot_20241211-102510-1.jpg" width="400"/>

## observações
respeite o limite da API e não abuse do uso da API. o uso excessivo pode ultrapassar o limite de requisições a API. a API foi desenvolvida com o intuito de aprimorar meus conhecimentos sobre programação back-end e integrações com APIs externas. por isso não estou aceitando contribuições ao projeto.