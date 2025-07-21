const { ValidationError } = require('../utils/errors');

module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || typeof name !== 'string') {
    return next(new ValidationError('Product name is required and must be a string'));
  }

  if (typeof description !== 'string') {
    return next(new ValidationError('Description must be a string'));
  }

  if (typeof price !== 'number') {
    return next(new ValidationError('Price must be a number'));
  }

  if (typeof category !== 'string') {
    return next(new ValidationError('Category must be a string'));
  }

  if (typeof inStock !== 'boolean') {
    return next(new ValidationError('inStock must be a boolean'));
  }

  next();
};
