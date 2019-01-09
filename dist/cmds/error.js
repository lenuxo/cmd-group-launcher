"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var chalk_1 = __importDefault(require("chalk"));
function error() {
    commander_1.default.on('command:*', function () {
        console.error(chalk_1.default.inverse.red("Invalid command: " + commander_1.default.args.join(' ') + "\nSee --help for a list of available commands."));
        process.exit(1);
    });
    commander_1.default.on('option:*', function () {
        console.error(chalk_1.default.inverse.red("Invalid option: " + commander_1.default.args.join(' ') + "\nSee --help for a list of available commands."));
        process.exit(1);
    });
}
exports.default = error;
//# sourceMappingURL=error.js.map