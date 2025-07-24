"use strict";
exports.__esModule = true;
exports.createCols = exports.makeSpaceX = void 0;
var constants_1 = require("../../constants/constants");
function createCols(pad) {
    var col = document.createElement('div');
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.gap = "".concat(pad, "px");
    col.style.flexGrow = '1';
    return col;
}
exports.createCols = createCols;
function makeSpaceX(spaceY, container) {
    (0, constants_1["default"])("".concat(container)).style.display = "flex";
    (0, constants_1["default"])("".concat(container)).style.gap = "".concat(spaceY, "px");
}
exports.makeSpaceX = makeSpaceX;
