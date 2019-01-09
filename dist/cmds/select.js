"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var findGroup_1 = __importDefault(require("./findGroup"));
var chalk_1 = __importDefault(require("chalk"));
var runCmd_1 = __importDefault(require("./runCmd"));
function select(totalList, groups) {
    if (groups[0]) {
        var targetGroups_1 = [];
        groups.forEach(function (name) {
            targetGroups_1.push(findGroup_1.default(name, totalList).group);
        });
        targetGroups_1.forEach(function (group) {
            if (group) {
                runCmd_1.default(group.cmd);
                console.log(chalk_1.default.green('[√] ' + group.name + ' 已启动'));
            }
            else {
                console.log(chalk_1.default.red('[x] 不存在'));
            }
        });
        process.exit(0);
    }
    else {
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'target',
                message: '选择要启动的组',
                choices: totalList.map(function (item, index) { return "" + item.name; }),
            },
        ])
            .then(function (answer) {
            var cmds = findGroup_1.default(answer.target, totalList).group.cmd;
            runCmd_1.default(cmds);
            console.log(chalk_1.default.green('[√] ' + answer.target + ' 已启动'));
            process.exit(0);
        });
    }
}
exports.default = select;
//# sourceMappingURL=select.js.map