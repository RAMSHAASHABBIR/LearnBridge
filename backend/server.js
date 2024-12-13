import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"; // Import CORS
import connectDB from "./config/db.js"; // Import the database connection
import authRoutes from "./routes/auth.js"; // Import your auth routes

// Configure dotenv
dotenv.config();

// Configure database connection
connectDB();

// Create app with express
const app = express();

// Configure CORS middleware
app.use(cors()); // Allow cross-origin requests

// Configure middlewares
app.use(express.json()); // For parsing JSON requests
app.use(morgan("dev"));  // HTTP request logger

// Set up routes
app.use("/api/auth", authRoutes); // Your authentication routes

// REST API Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the eCommerce app</h1>");
});

// Set up port and listen to the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
    );
});

