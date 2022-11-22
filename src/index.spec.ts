import {Server} from './index';
import fetch from 'node-fetch';

describe('Server sysinfo available', () => {
  it('should create server on port 8007', async () => {
      const server = new Server();
      server.startServer;
      const response = await fetch('http://localhost:8007/api/v1/sysinfo', {method: 'GET'});
      expect(response.ok).toEqual(true);
      server.closeServer;
  });
});

describe('Server 404 test', () => {
  it('should create server on port 8007', async () => {
      const server = new Server();
      server.startServer;
      const response = await fetch('http://localhost:8007/api/v1/ouiouioui', {method: 'GET'});
      expect(response.ok).toEqual(false);
      server.closeServer;
  });
});