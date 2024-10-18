import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/save.js';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: 'fake-token',
        user: 'fake-user',
      }),
  }),
);

//Mock the save function
jest.mock('../js/storage/save.js', () => ({
  save: jest.fn(),
}));

/**
 * Test suite for the `login` function.
 *
 * @description This test checks whether the `login` function stores the token and user profile when valid credentials are provided.
 *
 * Test will pass when:
 *  - The `login` function is called with valid email and password.
 *  - The `save` function is called with the token ('fake-token') and the user profile ('fake-user').
 *
 * Test will fail if:
 *  - The `save` function is not called with the correct token or profile.
 *  - An error is thrown or the login function does not behave as expected.
 */
describe('login', () => {
  it('should store a token when provided with valid credentials', async () => {
    const email = 'test@example.com';
    const password = 'fake-password';

    // Call the login function with valid credentials
    await login(email, password);

    // Check if the save function was called to store the token
    expect(save).toHaveBeenCalledWith('token', 'fake-token');

    // Check if the profile is saved correctly
    expect(save).toHaveBeenCalledWith('profile', {
      user: 'fake-user',
    });
  });
});
