import { store, login, logout } from './store';

describe('auth slice', () => {
  it('should handle login', () => {
    store.dispatch(login({ name: 'Jane', email: 'jane@example.com' }));
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual({ name: 'Jane', email: 'jane@example.com' });
  });

  it('should handle logout', () => {
    store.dispatch(logout());
    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
}); 