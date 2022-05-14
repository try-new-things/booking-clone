import jwt from 'jsonwebtoken';
import { createErrorHandler } from '../error/error-handler';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createErrorHandler("Yor are not authenticated.", 401));
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) {
      return next(createErrorHandler("Token is not valid.", 403));
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createErrorHandler("Yor are not authenticated.", 403));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createErrorHandler("Yor are not authenticated.", 403));
    }
  });
};