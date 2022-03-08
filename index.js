require('dotenv').config();
const http = require('http');
const fs = require('fs');
const httpServer = http.createServer();
const PORT = process.env.PORT || 3000;

httpServer.on('listening', () => console.log(`listening on port ${PORT}`));
httpServer.on('error', (error) => console.log(`An error occurred with this error message: ${error.message}`));
httpServer.on('request', (req, res) => {
    if(req.url === '/') {
        res.end(fs.readFileSync('index.html'));
        return;
    }

    if(req.url === '/upload') {
        const fileName = req.headers['file-name'];
        req.on('data', chunk => {
            fs.appendFileSync(fileName, chunk);
            console.log(`received chunk! ${chunk.length}`);
        });
        res.end('Uploaded!');
    }
});

httpServer.listen(PORT);