import axios from 'axios';
import { server } from '../server.js';
import {jest} from '@jest/globals'

jest.useFakeTimers();

const hostname = 'http://localhost';
const port = 9000;
const url = `${hostname}:${port}`;

describe('Phonebook', () => {
  test('GET /', () => {
    new Promise((resolve, reject) => {
      server(port, async () => {
        try {
          const res = await axios.get(url);
          expect(res.data).toBe('Welcome to The Phonebook\nRecords count: 1000');
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
});
