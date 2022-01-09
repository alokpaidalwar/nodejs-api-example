import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { PORT, DBURL, CORS_ORIGINS } from './config.js';
import postRouter from './routes/post.router.js';
import userRouter from './routes/user.router.js';

mongoose
  .connect(`${DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log(`Connected to DB ${DBURL}`);
  });

const app = express();
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(postRouter);

app.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`),
);

export default app;
