import { logout } from '../js/api/auth/logout.js';
import { remove } from '../js/storage/remove.js';

// Mock the remove function
jest.mock('../js/storage/remove.js', () => ({
  remove: jest.fn(),
}));

/**
 * Test suite for the `logout` function.
 *
 * @description This test checks whether the `logout` function clears both 'token' and 'profile' from browser storage
 *
 * Test will pass when:
 *  - The logout function correctly removes both the token and profile from storage
 *
 * Test will fail if:
 *  - Either is not removed or the function is not called
 */
describe('logout', () => {
  it('should clear the token and profile from browser storage', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
