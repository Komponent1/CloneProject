import { setupWorker } from 'msw';
import { handler as replhandler } from './replhandler';

export const serviceWorker = setupWorker(...replhandler());