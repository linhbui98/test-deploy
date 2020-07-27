const Express = require('express');
const Http = require('http');
const path = require('path')
const indexRoute = require('./routes/index');

// HTTP1
const http1app = Express();

http1app.set('views', path.join(__dirname, 'views'));
http1app.use(Express.static(__dirname, { dotfiles: 'allow' }));
http1app.set('view engine', 'pug');
http1app.get('/', indexRoute)

Http.createServer(http1app).listen(process.env.PORT || 8080, () => {
    console.log("App running")
});