"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathConfig = void 0;
const vscode_1 = require("vscode");
const config = vscode_1.workspace.getConfiguration('dure');
exports.pathConfig = config.get("path") || {};
//# sourceMappingURL=index.js.map