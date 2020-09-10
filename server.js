const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/', async (request, reply) => {
    reply.send(`To Redirect to google.com use /g in the url Thanks! ):`)
  })
  
  fastify.get('/g', async (request, reply) => {
    reply.redirect('https://www.google.com/');
  })
  const start = async () => {
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()