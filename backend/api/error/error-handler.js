class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createErrorHandler = (message, statusCode) => {
  return new ErrorHandler(message, statusCode);
}

export {
  createErrorHandler,
};