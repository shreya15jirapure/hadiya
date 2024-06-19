import express from 'express';
import { ServiceBusClient } from '@azure/service-bus';
import { expressApp } from './express-app.js'
import { PORT, SERVICE_BUS_CONNECTION_STRING, SERVICE_BUS_QUEUE_NAME } from './config/index.js';
import { sequelize } from './database/index.js'
import { ErrorLogger } from './utils/logger.js';

async function StartServer() {

  try{
    const app = express();

    const producer = await createSender();

    const port = PORT || 3000;

    expressApp(app, producer);

    app.listen(port, async () => {
      console.log(`Server is listening on ${port}`);
      await sequelize.authenticate();
      console.log('Database connected!');
    })
  }
  catch(err) {
    const logger = new ErrorLogger();
    logger.error(err);
  }

}

async function createSender(){
  const serviceBusClient = new ServiceBusClient(SERVICE_BUS_CONNECTION_STRING);
  return serviceBusClient.createSender(SERVICE_BUS_QUEUE_NAME);
}

await StartServer();
