import * as Joi from 'joi';

import { ConfigModule } from '@nestjs/config';

import { ConfigSchema } from './config.schema';

const validationSchema = Joi.object({
  DB_HOST: Joi.string().hostname().required(),
  DB_PORT: Joi.number().port().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  PORT: Joi.number().port().required(),
  NODE_ENV: Joi.string().allow(
    'production',
    'development',
    'staging',
    'testing',
  ),
});

function loadConfig(): ConfigSchema {
  return {
    database: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      name: process.env.DB_NAME,
    },
    port: 0,
  };
}

export default ConfigModule.forRoot({
  envFilePath: [
    'api.env.local',
    'api.env.test',
    'api.env.development',
    'api.env',
  ],
  load: [loadConfig],
  validationSchema,
  validationOptions: {
    abortEarly: true,
  },
  cache: true,
});
