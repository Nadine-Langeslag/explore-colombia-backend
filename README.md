# Explore Colombia — Backend

The backend API for Explore Colombia, a web application designed to help users discover destinations and places across Colombia.

The API provides user authentication, saved destinations, and the ability to share experiences about destinations.

## Technologies Used

- Node.js
- Express.js
- MongoDB and Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Celebrate and Joi
- Winston and Express-Winston

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nadine-Langeslag/explore-colombia-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd explore-colombia-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Environment Variables

For production, create a `.env` file with the following variables:

```env
NODE_ENV=production
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Never commit your `.env` file or expose your credentials.

In development, the application uses its local MongoDB configuration and development JWT secret.

## Running the Application

Start the development server:

```bash
npm run dev
```

Start the production server:

```bash
npm run start
```

The local server runs on:

`http://localhost:3000`

The API routes are available under the `/api` prefix.

## API Routes

### Authentication and Users

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| POST   | `/api/signup`   | Register a new user                |
| POST   | `/api/signin`   | Authenticate a user                |
| GET    | `/api/users/me` | Get the current user's information |

### Saved Destinations

| Method | Endpoint                      | Description                 |
| ------ | ----------------------------- | --------------------------- |
| GET    | `/api/saved-destinations`     | Get saved destinations      |
| POST   | `/api/saved-destinations`     | Save a destination or place |
| DELETE | `/api/saved-destinations/:id` | Remove a saved destination  |

### Experiences

| Method | Endpoint                          | Description                       |
| ------ | --------------------------------- | --------------------------------- |
| GET    | `/api/experiences/:destinationId` | Get experiences for a destination |
| POST   | `/api/experiences/:destinationId` | Share an experience               |
| PATCH  | `/api/experiences/:id`            | Edit an experience                |
| DELETE | `/api/experiences/:id`            | Delete an experience              |

Protected routes require a valid JWT in the Authorization header using the Bearer scheme.

## Deployment

The backend is deployed at:

**API URL:** [To be added]

The API uses HTTPS in production.

## Author

Nadine Langeslag

[GitHub Repository](https://github.com/Nadine-Langeslag/explore-colombia-backend)
