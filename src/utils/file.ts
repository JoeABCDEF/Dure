import { createHash } from 'crypto';
import { readFileSync, mkdir, writeFile, openSync, existsSync, rmdir } from 'fs';
import { resolve } from 'path';

export function shake256Hash(path: string, outputLength: number = 9) {
    const shake256 = createHash('shake256', { outputLength: outputLength });
    const fs = readFileSync(resolve(__dirname, path), 'utf-8').valueOf();
    return shake256.update(fs).digest('hex');
}

// console.time('a');
console.log(shake256Hash('../index.txt'));
// console.timeEnd('a');
export function pullHash() {

}