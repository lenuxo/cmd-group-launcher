"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var __root = require('app-root-path');
function runCmd(cmds) {
    cmds.forEach(function (cmd) {
        if (cmd) {
            child_process_1.exec("bash " + __root + "/iterm.bash \"clear&&\"" + cmd.trim() + "\"\"");
        }
    });
}
exports.default = runCmd;
//# sourceMappingURL=runCmd.js.map