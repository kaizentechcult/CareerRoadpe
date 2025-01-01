const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const config = require('./config');
const logger = require('./utils/logger');
const { handleError } = require('./utils/errors');
const authRoutes = require('./routes/auth');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ 
  origin: config.allowedOrigins,
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimiting.windowMs,
  max: config.rateLimiting.max,
});
app.use(limiter);

// Logging middleware
if (config.env === 'development') {
  app.use(morgan(config.logFormat, { stream: logger.stream }));
}

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const apiPrefix = config.apiPrefix;
app.use(`${apiPrefix}/auth`, authRoutes);

// Static data routes
const roadmap = require('../api/roadmapInitialData.json');
const scholarship = require('../api/scholarship.json');
const team = require('../api/team.json');              
const article = require('../api/article.json');

app.get(`${apiPrefix}/roadmap`, (req, res) => res.json(roadmap));
app.get(`${apiPrefix}/scholarship`, (req, res) => res.json(scholarship));
app.get(`${apiPrefix}/team`, (req, res) => res.json(team));
app.get(`${apiPrefix}/article`, (req, res) => res.json(article));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Cannot ${req.method} ${req.url}`,
  });
});

// Global error handler
app.use(handleError);

module.exports = app; 