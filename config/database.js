import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config(); // Load environment variables from .env

// Create a new Sequelize instance with PostgreSQL credentials from .env
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASS, // Database password
  {
    host: process.env.DB_HOST, // Database host (localhost)
    dialect: "postgres", // Specify we're using PostgreSQL
    logging: false, // Disable SQL logging (optional, makes console cleaner)
  }
);

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to PostgreSQL! 🚀");
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
};

testConnection();

export default sequelize; // Export sequelize instance for use in models
