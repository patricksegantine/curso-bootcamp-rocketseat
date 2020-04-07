import dotenv from 'dotenv';
import Queue from './lib/Queue';

dotenv.config();
Queue.processQueue();
