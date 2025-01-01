const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const { AuthenticationError } = require('../utils/errors');

const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new AuthenticationError('Not authenticated - Please log in');
    }

    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new AuthenticationError('User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AuthenticationError('Not authorized to access this route');
    }
    next();
  };
};

module.exports = {
  protect,
  restrictTo,
}; 
}; 