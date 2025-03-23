// routes/bookRoutes.js
import express from "express";
import { check } from "express-validator";
import { getAllBooks, getBookById, addBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

// Validation rules for creating a new book
const validateBook = [
  check("title")
    .notEmpty()
    .withMessage("Title is required"),
  check("author")
    .notEmpty()
    .withMessage("Author is required"),
  check("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  check("publishedYear")
    .isInt({ min: 1000, max: new Date().getFullYear() })
    .withMessage("Enter a valid year"),
];


router.get("/", getAllBooks); // GET all books
router.get("/:id", getBookById); // GET book by ID
router.post("/", addBook); // ADD a new book
router.put("/:id", updateBook); // UPDATE a book
router.delete("/:id", deleteBook); // DELETE a book

export default router;
