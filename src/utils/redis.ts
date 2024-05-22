import Redis, {RedisOptions} from 'ioredis';
import {config} from './config';

const redisOptions: RedisOptions = {
  ...config.redis,
};

export type TransactionType = {
  request: object;
  response?: object;
};

export const redis = new Redis(redisOptions);
