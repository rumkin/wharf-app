var http = require('http');

http.createServer((req, res) => {
    res.end('Hello ' + process.env.WHARF_OPT_APP_GREETING);
})
.listen(8080, () => {
    process.env.WHARF_OPT_APP_VERBOSE && console.log('server started');
});
