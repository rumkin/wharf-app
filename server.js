const http = require('http');
const isJson = !! process.env.WHARF_OPT_APP_JSON;
const message = 'Hello ' + process.env.WHARF_OPT_APP_GREETING;

http.createServer((req, res) => {
    if (isJson || (req.headers['content-type']||'').includes('application/json')) {
        res.setHeader('content-type', 'application/json;charset=utf-8');
        res.end(JSON.stringify({message}));
    } else {
        res.end(message);
    }
})
.listen(8080, () => {
    process.env.WHARF_OPT_APP_VERBOSE && console.log('server started');
});
