'use strict'

const Fastify = require('fastify')
const GQL = require('../..')
const persistedQueries = require('./queries.json')

const app = Fastify()

const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, obj) => {
      const { x, y } = obj
      return x + y
    }
  }
}

app.register(GQL, {
  schema,
  resolvers,
  persistedQueries,
  graphiql: true
})

app.listen(3000)
