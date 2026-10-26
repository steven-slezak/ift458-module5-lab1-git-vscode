// loggerMiddleware.js
// Logs the method, URL, status code, and response time of every request.

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  // Runs after the response has been sent, so we can log the status code
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });

  next(); // Pass control to the next middleware or route handler
};

module.exports = loggerMiddleware;
