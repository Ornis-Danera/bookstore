import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config(); // Load environment variables

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // Disable SQL logging (optional)
});

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

export default sequelize; // Export Sequelize instance
