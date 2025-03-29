require('dotenv').config();
const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  readFileAsync(getFileNameFromReqUrl(req.url)).then((f) => res.end(f));
});

server.listen(parseInt(process.env.PORT));

async function readFileAsync(filename) {
  try {
    return await fs.readFile(filename, { encoding: 'utf8' });
  } catch (err) {
    console.error(err);
  }
}

const getFileNameFromReqUrl = (reqUrl) => {
  switch (reqUrl) {
    case '/':
      return 'index.html';
    case '/about':
      return 'about.html';
    case '/contact-me':
      return 'contact-me.html';

    default:
      return '404.html';
  }
};
