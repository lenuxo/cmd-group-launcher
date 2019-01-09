"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function find(_target, all) {
    var target = _target;
    if (parseInt(target)) {
        target = parseInt(target);
    }
    if (typeof target == 'number') {
        return { group: all[target - 1], index: target - 1 };
    }
    else if (typeof target == 'string') {
        return {
            group: all.find(function (i) { return i.name == target; }),
            index: all.findIndex(function (i) { return i.name == target; }),
        };
    }
    else {
        throw new Error('wrong');
    }
}
exports.default = find;
//# sourceMappingURL=findGroup.js.map