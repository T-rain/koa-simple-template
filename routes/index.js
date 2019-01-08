const router = require('koa-router')();
const requestPN = require('request-promise-native');
const _ = require('lodash')

router.get('/', async function (ctx, next) {
  // ctx.state = {
  //   title: 'koa2 title'
  // };
  ctx.response.status = 418
  ctx.response.body="teapot"
})

module.exports = router;