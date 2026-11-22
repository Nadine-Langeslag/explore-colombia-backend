# Explore Colombia — Backend

The backend API for Explore Colombia, a travel discovery web application designed to help users discover destinations and places across Colombia.

The API provides user authentication, saved destinations and attractions, and the ability to share experiences about destinations and places.

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

For production, create a `.env` file in the project root with the following variables:

```env
NODE_ENV=production
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Replace the example values with your actual production credentials.

Never commit your `.env` file or expose your credentials.

In development, the application uses a local MongoDB database and a development JWT secret.

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

All API routes are available under the `/api` prefix.

## API Routes

### Authentication and Users

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| POST   | `/api/signup`   | Register a new user                |
| POST   | `/api/signin`   | Authenticate a user                |
| GET    | `/api/users/me` | Get the current user's information |

### Saved Destinations and Places

| Method | Endpoint                      | Description                              |
| ------ | ----------------------------- | ---------------------------------------- |
| GET    | `/api/saved-destinations`     | Get the authenticated user's saved items |
| POST   | `/api/saved-destinations`     | Save a destination or place              |
| DELETE | `/api/saved-destinations/:id` | Remove a saved item                      |

### Experiences

| Method | Endpoint                             | Description                                      |
| ------ | ------------------------------------ | ------------------------------------------------ |
| GET    | `/api/experiences/:itemType/:itemId` | Get experiences for a destination or place       |
| POST   | `/api/experiences/:itemType/:itemId` | Share an experience about a destination or place |
| PATCH  | `/api/experiences/:id`               | Edit an experience                               |
| DELETE | `/api/experiences/:id`               | Delete an experience                             |

Users must save a destination or place before sharing an experience about it. Each user can share one experience per item.

Users can edit and delete only their own experiences. Saved items are associated with the authenticated user.

### Authentication and Authorization

Protected routes require a valid JWT in the Authorization header using the Bearer scheme.

## Deployment

The backend is deployed at:

**API URL:** [https://api.explore-colombia.mooo.com](https://api.explore-colombia.mooo.com)

All API endpoints are available under the `/api` prefix.

The production API uses HTTPS.

## Author

Nadine Langeslag

[GitHub Repository](https://github.com/Nadine-Langeslag/explore-colombia-backend)
