import * as Joi from 'joi';

// Define a schema for validation
const envSchema = Joi.object({
  PORT: Joi.number().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_USER: Joi.string().required(),
  REDIS_PASS: Joi.string().required(),
  REGISTRY_URL: Joi.string().required(),
  PRIVATE_KEY: Joi.string().required(),
  UNIQUE_KEY: Joi.string().required(),
  SUBSCRIBER_ID: Joi.string().required(),
}).unknown(); // allow unknown keys
console.log("PROCESS.ENV :::", process.env.PORT)
// Validate environment variables
const {error, value: envVars} = envSchema.validate(process.env, {
  abortEarly: false,
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Export validated variables
export const config = {
  port: envVars.PORT,
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    username: envVars.REDIS_USER,
    password: envVars.REDIS_PASS,
  },
  registryUrl: envVars.REGISTRY_URL,
  subscriberId: envVars.SUBSCRIBER_ID,
  privateKey: envVars.PRIVATE_KEY,
  uniqueKey: envVars.UNIQUE_KEY,
};
