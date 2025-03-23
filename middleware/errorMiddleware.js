// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error(`❌ Error: ${err.message}`);
  
  // If the error has a specific statusCode, use it; otherwise default to 500
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
}; 
  export { errorHandler };
  