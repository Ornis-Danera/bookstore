import { DataTypes } from "sequelize"; // Import Sequelize DataTypes
import sequelize from "../config/database.js"; // Import the Sequelize instance

// Define the Book model (table)
const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER, // Integer data type
    autoIncrement: true, // Automatically increment the ID
    primaryKey: true, // Set as primary key
  },
  title: {
    type: DataTypes.STRING, // Text column for the title
    allowNull: false, // Title is required (not null)
  },
  author: {
    type: DataTypes.STRING, // Text column for the author
    allowNull: false, // Author is required
  },
  price: {
    type: DataTypes.FLOAT, // Number column for price
    allowNull: false, // Price is required
  },
  publishedYear: {
    type: DataTypes.INTEGER, // Year published
    allowNull: false, // It must have a value
  },
});

// Export the model so we can use it in other files
export default Book;
