import Book from "../models/Book.js";

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Get a single book by ID
export const getBookById = async (req, res,next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    next(error); // Pass error to global handler
      }
};

// Add a new book
export const addBook = async (req, res) => {
  try {
    const { title, author, price, publishedYear } = req.body;
    const book = await Book.create({ title, author, price, publishedYear });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Failed to add book" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    await book.update(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    await book.destroy();
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
