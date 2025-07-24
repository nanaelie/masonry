var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants/constants", "./src/utils/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const constants_1 = __importDefault(require("./constants/constants"));
    const utils_1 = require("./src/utils/utils");
    function getResponsiveCol(config) {
        const w = window.innerWidth;
        if (w >= 1280 && config.xl)
            return config.xl;
        if (w >= 1024 && config.lg)
            return config.lg;
        if (w >= 768 && config.md)
            return config.md;
        if (w >= 640 && config.sm)
            return config.sm;
        return config.default || 1;
    }
    function getLastFilledRowIndex(cols) {
        let lastIndex = 0;
        for (let i in cols) {
            // if (cols[i].querySelectorAll('*'))
        }
    }
    function masonry({ col, renderItems, container, spaceX = 1, spaceY = 1 }) {
        let nItemByCols = renderItems.length / col;
        let nLastItemCols = nItemByCols;
        (0, utils_1.makeSpaceX)(spaceX, container);
        let cols = [];
        let itemsCounter = Array(0);
        for (let i = 0; i < col; i++) {
            cols.push((0, utils_1.createCols)(spaceY));
        }
        if (renderItems.length % col != 0) {
            nLastItemCols = renderItems.length % col;
        }
        for (let i = 0; i < renderItems.length; i++) {
            renderItems[i].style.transition = 'all 0.3s ease';
            cols[i % col].appendChild(renderItems[i]);
            itemsCounter[i % col] += 1;
        }
        for (let i in cols) {
            (0, constants_1.default)(`${container}`).appendChild(cols[i]);
        }
        console.log('terminé');
        console.log(` - There are ${col} columns`);
        console.log(` - Each column has ${nItemByCols} rows`);
        console.log(` - The first column has ${nLastItemCols} rows`);
        console.log(` - ItemsCounter = ${itemsCounter}`);
    }
    exports.default = masonry;
});
