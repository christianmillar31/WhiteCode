import { createMocks } from 'node-mocks-http';

// Use require to avoid module resolution issues
const handler = require('./user').default;

describe('/api/user API', () => {
  it('returns user data for GET', async () => {
    const { req, res } = createMocks({ 
      method: 'GET' 
    });
    
    // Add missing NextApiRequest properties
    (req as any).env = {};
    (req as any).preview = false;
    (req as any).previewData = undefined;
    
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ 
      name: 'John Doe', 
      email: 'john@example.com' 
    });
  });

  it('returns 405 for non-GET', async () => {
    const { req, res } = createMocks({ 
      method: 'POST' 
    });
    
    // Add missing NextApiRequest properties
    (req as any).env = {};
    (req as any).preview = false;
    (req as any).previewData = undefined;
    
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
}); 