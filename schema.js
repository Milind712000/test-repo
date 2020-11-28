const env = {
    type : 'object',
    require : [
        'MONGO_CONNECTION_STRING', 
        'ACCESS_TOKEN_SECRET_KEY', 
        'GUEST_TOKEN_SECRET_KEY'],
    properties: {
      MONGO_CONNECTION_STRING : { type : 'string' },
      ACCESS_TOKEN_SECRET_KEY : { type : 'string' },
      GUEST_TOKEN_SECRET_KEY : { type : 'string' }
    },
    additionalProperties: true
  };
  
  const swaggerOption = {
    swagger: {
      info: {
        title: 'Taxi Pooler APIs',
        description: 'Testing the APIs',
        version: '2.0.0'
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    exposeRoute: true,
    additionalProperties : true
  }
  
  module.exports = {
    env,
    swaggerOption
  }
  