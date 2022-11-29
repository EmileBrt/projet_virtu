import * as http from 'http';
import si from 'systeminformation';
import { ISystemInformation } from './interface';

export const getSystemInfo = async () : Promise<ISystemInformation> => {
  let sysInfo: ISystemInformation = {
    cpu: undefined,
    system: undefined,
    mem: undefined,
    os: undefined,
    currentLoad: undefined,
    processes: undefined,
    diskLayout: [],
    networkInterfaces: []
  }
  
  // Fetch data & modify object
  await si.cpu().then((data => sysInfo.cpu = data))
    .catch(error => console.error(error))
  .then(() => si.system()).then((data => sysInfo.system = data))
    .catch(error => console.error(error))
  .then(() => si.mem()).then((data => sysInfo.mem = data))
    .catch(error => console.error(error))
  .then(() => si.osInfo()).then((data => sysInfo.os = data))
    .catch(error => console.error(error))
  .then(() => si.currentLoad()).then((data => sysInfo.currentLoad = data))
    .catch(error => console.error(error))
  .then(() => si.processes()).then((data => sysInfo.processes = data))
    .catch(error => console.error(error))
  .then(() => si.diskLayout()).then((data => sysInfo.diskLayout = data))
    .catch(error => console.error(error))
  .then(() => si.networkInterfaces()).then((data => sysInfo.networkInterfaces = data))
    .catch(error => console.error(error))
  
  return sysInfo;
}

export class Server {
  
  socket: http.Server;

  constructor(){  }

  createServer():void {
    this.socket = http.createServer(async function (req, res) {
    if(req.url == "/api/v1/sysinfo"){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      var sysinfo = await getSystemInfo();
      res.write(JSON.stringify(sysinfo,null,4) + "\n");
    }
    else{
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("Error 404 \n");
    }
    res.end();
  });
  }

  startServer(): void {
    this.socket.listen(8007, "0.0.0.0");
  }

  closeServer():void{
    this.socket.close();
  }
}
