const { NODE_ENV, JWT_SECRET } = process.env;

const secret = NODE_ENV === "production" ? JWT_SECRET : "dev-secret";

const mongoUri = NODE_ENV === "production"
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017/explorecolombia";

export { mongoUri };
export default secret;
