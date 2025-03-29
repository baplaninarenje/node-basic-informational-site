const express = require('express');
const app = express();

// Helper function to send HTML files with status 200 and content type 'text/html'
const sendHtml = (res, fileName) => {
  res
    .status(200)
    .set('Content-Type', 'text/html')
    .sendFile(fileName, { root: __dirname });
};

app.get('/', (req, res) => sendHtml(res, 'index.html'));
app.get('/about', (req, res) => sendHtml(res, 'about.html'));
app.get('/contact-me', (req, res) => sendHtml(res, 'contact-me.html'));

app.use((req, res) => sendHtml(res, '404.html'));

const PORT = 8080;
app.listen(PORT);
