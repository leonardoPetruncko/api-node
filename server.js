const http = require("http")
const port = 3000;

const server =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end ('Curso de Node');
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})