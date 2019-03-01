import { hello } from './index';

describe('index.ts', () => {
    it('should return "Hello, Universe!"', () => {
        expect(hello()).toEqual('Hello, Universe!');
    });
});