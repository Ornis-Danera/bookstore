import express from "express";
import cors from "cors"; // Handles CORS issues
import morgan from "morgan"; // Logs HTTP requests
import bookRoutes from "./routes/bookRoutes.js"; // Import routes
import sequelize from "./config/database.js"; // Make sure you import sequelize
import { errorHandler } from "./middleware/errorMiddleware.js"; // We'll create this soon

const app = express();

// 🔹 Middleware
app.use(express.json()); // Parses JSON data
app.use(cors()); // Enables CORS
app.use(morgan("dev")); // Logs HTTP requests

// 🔹 Routes
app.use("/api/books", bookRoutes); // Prefix routes with /api/books

// 🔹 Error Handling Middleware
app.use(errorHandler); // Handles errors globally

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
