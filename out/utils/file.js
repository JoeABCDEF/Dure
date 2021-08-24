"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullHash = exports.shake256Hash = void 0;
const crypto_1 = require("crypto");
const fs_1 = require("fs");
const path_1 = require("path");
function shake256Hash(path, outputLength = 9) {
    const shake256 = crypto_1.createHash('shake256', { outputLength: outputLength });
    const fs = fs_1.readFileSync(path_1.resolve(__dirname, path), 'utf-8').valueOf();
    return shake256.update(fs).digest('hex');
}
exports.shake256Hash = shake256Hash;
// console.time('a');
console.log(shake256Hash('../index.txt'));
// console.timeEnd('a');
function pullHash() {
}
exports.pullHash = pullHash;
//# sourceMappingURL=file.js.map