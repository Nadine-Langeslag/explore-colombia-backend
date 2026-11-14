const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;

  const message =
    statusCode >= 500 ? "An error occurred on the server" : err.message;

  res.status(statusCode).json({ message });
};

export default errorHandler;
