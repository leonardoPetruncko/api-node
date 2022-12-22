const http = require("http")
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listragem de autores',
    '/sobre': 'Info sobre o sistema'
}   

const server =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end (rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})