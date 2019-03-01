import http from 'http';

http.createServer().listen(3000);

export function hello() {
    return 'Hello, Universe!';
}
