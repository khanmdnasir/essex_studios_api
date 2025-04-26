# 🏥 Hospital Booking API

This is a Node.js REST API for managing hospital listings and user bookings, built with **Express**, **PostgreSQL**, and **JWT-based authentication**.

---

## 📦 Tech Stack & Decisions

### 🛠 Frameworks & Libraries

- **Node.js + Express.js**: Lightweight, flexible for building fast APIs.
- **PostgreSQL**: Chosen for its relational schema and support for data integrity through foreign keys (e.g., user → booking).
- **JWT (jsonwebtoken)**: Simple token-based authentication to protect private routes.
- **bcryptjs**: For securely hashing user passwords.
- **Joi**: For input validation.
- **Drizzle ORM**: For interacting with PostgreSQL.
- **pg**: Native PostgreSQL driver for Node.js for efficient DB interaction.

### 🐳 Docker

- Docker is used to containerize the app and its dependencies (Node + PostgreSQL) for easy development, deployment, and environment consistency.

---

## 📁 API Structure

The API is organized into the following routes:

- `/auth`: Authentication routes for registering and logging in users.
- `/hospitals`: Endpoints for managing hospital listings.
- `/bookings`: Endpoints for managing user bookings.

---

## 🚀 Getting Started

### 📦 Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js**: For running the server on local.
- **Docker**: For containerizing the app and its dependencies.

### 🏃‍♀️ Running the Server on Local

1. Clone the repository:

```bash
git clone https://github.com/khanmdnasir/essex_studios_api.git
```

2. Navigate to the project directory:

```bash
cd essex_studios_api
```

3. Install dependencies:

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

5. Start the server:

```bash
npm run start
```

6. Open your browser and navigate to `http://localhost:3000/auth/register` to register a new user.

7. Open your browser and navigate to `http://localhost:3000/auth/login` to log in as the registered user.

8. You can now interact with the API endpoints using your preferred HTTP client (e.g., Postman).


### 🐳 Running the Server with Docker

1. Build the Docker image:

```bash
docker build -t essex_studios_api .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 essex_studios_api
```
Continue from step 6 in the previous section.

---

## 📝 License

This project is licensed under the MIT License.