import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { PORT, DBURL, CORS_ORIGINS } from './config.js';
import favoriteRouter from './routes/favorite.router.js';
import profileRouter from './routes/profile.router.js';
import simulatorRouter from './routes/simulator.router.js';

mongoose
  .connect(`${DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
  });

const app = express();
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favoriteRouter);
app.use(profileRouter);
app.use(simulatorRouter);

app.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`),
);
