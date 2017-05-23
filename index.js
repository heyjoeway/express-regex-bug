const PORT = 3000;

const Express = require('express');
const app = Express();

// Initialize HTTP server.
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}
Here's some URLs to try:
http://localhost:${PORT}/test/b60873051996f8378607fa34
http://localhost:${PORT}/test/5b3467603a5e324681a6ebc0
http://localhost:${PORT}/test/14f554f7708f300ba9aa2be1
http://localhost:${PORT}/test/1b2f705f2e574139ab5779f7
http://localhost:${PORT}/test/1781a8aaf773f3e752a8f126
http://localhost:${PORT}/test/e534ca8ae8110644244ec093
http://localhost:${PORT}/test/eb37c274eb8a9e973154c762
http://localhost:${PORT}/test/e29e356a781646c90358826a
http://localhost:${PORT}/test/e7a4b60f032817f8622165a0
http://localhost:${PORT}/test/711ff011af06b0902276b520`);
});

// Echos the ID given in the URL.
app.get(/\/test\/[a-f0-9]{24}/g, function(req, res) {
    let id = req.originalUrl.split('/')[2];
    res.send(id);
});
