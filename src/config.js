import dotenv from 'dotenv';

// call the config function
dotenv.config();

const checkEnv = (envVar, defaultValue) => {
  if (!process.env[envVar]) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`Please define the Enviroment variable"${envVar}"`);
  } else {
    return process.env[envVar];
  }
};

export const PORT = parseInt(checkEnv('PORT'), 10);
export const DBURL = checkEnv('DBURL');
export const CORS_ORIGINS = ['http://localhost:3000'];
export const JWT_SECRET = checkEnv('JWT_SECRET');
