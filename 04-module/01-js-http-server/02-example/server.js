import fs from 'fs/promises';
import http from 'http';
import path from 'path';

export const server = async (port, callback) => {
  const data = await fs.readFile(path.join(process.cwd(), '04-module/01-js-http-server/02-example/assets/phonebook.txt'));
  const users = data.toString()
    .trim()
    .split('\n');

  const server = http.createServer((request, response) => {
    const messages = [
      'Welcome to The Phonebook',
      `Records count: ${users.length}`,
    ];
    response.end(messages.join('\n'));
  });

  server.listen(port, callback);
}
