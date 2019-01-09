"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var findGroup_1 = __importDefault(require("./findGroup"));
var log = console.log;
function ls(totalList, groupname) {
    if (!groupname || !groupname.length) {
        printAll(totalList);
    }
    else {
        groupname.forEach(function (i) {
            var one = findGroup_1.default(i, totalList);
            if (one.group) {
                oneGroup(one.group, one.index);
            }
            else {
                log(chalk_1.default.inverse.gray('[x]'), chalk_1.default.gray('该组不存在: ' + i));
            }
        });
    }
}
exports.default = ls;
function printAll(totalList) {
    if (!totalList.length) {
        log(chalk_1.default.inverse.gray('[x]'), chalk_1.default.gray('无'));
    }
    else {
        totalList.forEach(function (group, index) { return oneGroup(group, index); });
    }
}
function oneGroup(group, index) {
    log(chalk_1.default.inverse.blue("[" + (index + 1) + "]"), chalk_1.default.blue(group.name));
    if (group.cmd.length) {
        group.cmd.forEach(function (cmd, i) {
            var before = i < group.cmd.length - 1 ? '├──' : '└──';
            log(before, cmd.toString());
        });
    }
    else {
        log('└─', chalk_1.default.gray('无'));
    }
}
//# sourceMappingURL=ls.js.map