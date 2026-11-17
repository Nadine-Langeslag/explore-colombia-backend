import winston from "winston";
import expressWinston from "express-winston";

const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
  requestWhitelist: ["url", "method"],
  responseWhitelist: ["statusCode"],
});

const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
  requestWhitelist: ["url", "method"],
  responseWhitelist: ["statusCode"],
});

export { requestLogger, errorLogger };
