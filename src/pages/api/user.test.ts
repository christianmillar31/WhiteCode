import handler from './user';
import { createMocks } from 'node-mocks-http';

describe('/api/user API', () => {
  it('returns user data for GET', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ name: 'John Doe', email: 'john@example.com' });
  });

  it('returns 405 for non-GET', async () => {
    const { req, res } = createMocks({ method: 'POST' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
}); 