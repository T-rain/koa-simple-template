const Koa = require('koa');
const app = new Koa();
// const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');
const http = require('http');

const index = require('./routes/index');

// error handler
onerror(app);

// middlewares
app.use(bodyparser());
app.use(json({pretty: false}));
app.use(logger());
app.use(cors());
app.use(require('koa-static')(__dirname + '/public'));

// routes
app.use(index.routes(), index.allowedMethods());

// create http server
var port = 3000;
var server = http.createServer(app.callback());
server.listen(port);
server.on('error', (error)=>{
  console.error(error);
});
server.on('listening', ()=>{
  console.log("http server running on "+port);
});
