const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

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
// "dev": "node src/api.js",
//     "seed": "node src/scripts/seed.js",
//     "start": "node dist/api.js",
//     "build": "tsc -b"
