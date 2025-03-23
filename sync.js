import sequelize from "./config/database.js";
import Book from "./models/Book.js"; // Import the Book model

// Sample book data
const seedBooks = [
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 29.99, publishedYear: 1999 },
  { title: "Clean Code", author: "Robert C. Martin", price: 35.50, publishedYear: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", price: 25.00, publishedYear: 2014 },
];

// Function to sync and seed the database
const syncAndSeed = async () => {
  try {
    await sequelize.sync({ force: true }); // Sync database (force: true drops tables)
    console.log("✅ Database synced!");

    await Book.bulkCreate(seedBooks); // Insert sample books
    console.log("📚 Sample books added!");

    process.exit(); // Exit process when done
  } catch (error) {
    console.error("❌ Error syncing database:", error);
    process.exit(1);
  }
};

syncAndSeed(); // Run the function
