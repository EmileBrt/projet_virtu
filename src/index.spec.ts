import {Server} from './server';
import * as http from 'http';

let server;

describe('Server sysinfo available', () => {
  beforeAll(() => {
    console.log(1);
    server = new Server();
    console.log(2);
    server.createServer();
    console.log(3);
    server.startServer();
    console.log(4);
  })

  afterAll(() => {
    server.closeServer();
    console.log("Server Closed\n");
  })

  it('should create server on port 8007', async () => {
    const response = http.get('http://localhost:8007/api/v1/sysinfo', (response: http.IncomingMessage) => {
      expect(response.statusCode).toEqual(200);
    });
  });

  it('should not responde', async () => {
    const response = http.get('http://localhost:8007/api/v1/ouiioi', (response: http.IncomingMessage) => {
      expect(response.statusCode).toEqual(404);
    });
  });
});
