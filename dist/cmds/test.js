"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var __root = require('app-root-path');
function test() {
    child_process_1.exec('bash ' + __root + '/iterm.bash');
    child_process_1.exec('bash ' + __root + '/iterm.bash pwd');
}
exports.default = test;
//# sourceMappingURL=test.js.map