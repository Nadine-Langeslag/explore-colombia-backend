import express from "express";
import { errors } from "celebrate";

import connectToDatabase from "./utils/mongo.js";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errors.js";
import { requestLogger, errorLogger } from "./middlewares/logger.js";

const app = express();

const PORT = 3000;

app.use(requestLogger);
app.use(express.json());
app.use(router);
app.use(errors());
app.use(errorLogger);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

startServer();
