var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../constants/constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCols = exports.makeSpaceX = void 0;
    const constants_1 = __importDefault(require("../../constants/constants"));
    function createCols(pad) {
        const col = document.createElement('div');
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.style.gap = `${pad}px`;
        col.style.flexGrow = '1';
        return col;
    }
    exports.createCols = createCols;
    function makeSpaceX(spaceY, container) {
        (0, constants_1.default)(`${container}`).style.display = `flex`;
        (0, constants_1.default)(`${container}`).style.gap = `${spaceY}px`;
    }
    exports.makeSpaceX = makeSpaceX;
});
