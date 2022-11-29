import {Server} from './server';
import * as http from 'http';

let server;

describe('Server sysinfo available', () => {
  beforeAll(() => {
    server = new Server();
    server.createServer();
    server.startServer();
  })

  afterAll(() => {
    server.closeServer();
  })

  it('should create server on port 8007', async () => {
    var options = {
      host: 'http://127.0.0.1:8007',
      path: '/api/v1/sysinfo/'
    };
    const response = http.get(options, (response: http.IncomingMessage) => {
      
      expect(response.statusCode).toEqual(200);
    });
  });

  it('should not responde', async () => {
    var options = {
      host: 'http://127.0.0.1:8007',
      path: '/api/v1/ouiioi/'
    };
    const response = http.get(options, (response: http.IncomingMessage) => {
      expect(response.statusCode).toEqual(404);
    });
  });
});