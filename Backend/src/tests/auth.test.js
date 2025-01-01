const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app'); // We'll create this next
const User = require('../models/user');
const config = require('../config');

describe('Auth Controller', () => {
  let authToken;

  beforeEach(async () => {
    // Create a test user
    const user = await User.create({
      email: 'test@example.com',
      password: 'password123',
      displayName: 'Test User',
    });

    // Generate auth token
    authToken = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: config.jwtAccessExpiresIn,
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should login user with valid credentials', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.user).toHaveProperty('email', 'test@example.com');
    });

    it('should not login with invalid credentials', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword',
        });

      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });
  });

  describe('GET /api/v1/auth/me', () => {
    it('should get current user profile', async () => {
      const res = await request(app)
        .get('/api/v1/auth/me')
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.status).toBe(200);
      expect(res.body.user).toHaveProperty('email', 'test@example.com');
    });

    it('should not get profile without auth token', async () => {
      const res = await request(app).get('/api/v1/auth/me');

      expect(res.status).toBe(401);
      expect(res.body).toHaveProperty('message', 'No auth token');
    });
  });

  describe('POST /api/v1/auth/register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          email: 'newuser@example.com',
          password: 'password123',
          displayName: 'New User',
        });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('token');
      expect(res.body.user).toHaveProperty('email', 'newuser@example.com');
    });

    it('should not register user with existing email', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          displayName: 'Test User',
        });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('message', 'Email already exists');
    });
  });
}); 