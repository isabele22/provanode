//1 atividade

//const http = require('http')
//const 


//2 atividade
const http = require('http');
const name = require('name');
const { URL } = require('url');
const objeto =
    {root:'',
    dir:'http:“https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf',
    base:'“/planodecurso.pdf',
    ext:'pdf',
    name:'planodecurso'
}

const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, clientSocket, head) => {
  
  const { port, hostname } = new URL(`http:“https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf”//${req.url}`);
  const serverSocket = net.connect(port || 80, hostname, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});


// atividade 4
const 
