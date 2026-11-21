import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const gameRoot = resolve(fileURLToPath(new URL('./game', import.meta.url)));
const flag = process.argv.indexOf('--port');
const candidate = flag < 0 ? 8080 : Number(process.argv[flag + 1]);
const port = Number.isInteger(candidate) && candidate > 0 && candidate < 65536 ? candidate : 8080;
const types: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
};
createServer((request, response) => {
  let path: string;
  try { path = decodeURIComponent(new URL(request.url ?? '/', 'http://127.0.0.1').pathname); }
  catch { response.writeHead(400).end('invalid path'); return; }
  if (path.endsWith('/')) path += 'index.html';
  const target = resolve(join(gameRoot, normalize(path)));
  if (target !== gameRoot && !target.startsWith(gameRoot + sep)) { response.writeHead(403).end('outside game'); return; }
  try {
    const stat = statSync(target);
    if (!stat.isFile()) throw new Error('not a file');
    response.writeHead(200, { 'content-type': types[extname(target)] ?? 'application/octet-stream', 'content-length': stat.size, 'cache-control': 'no-store' });
    createReadStream(target).pipe(response);
  } catch { response.writeHead(404).end('not found'); }
}).listen(port, '127.0.0.1', () => process.stdout.write(`Serving game on ${port}\n`));
