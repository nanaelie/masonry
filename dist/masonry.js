(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.masonry = factory());
})(this, (function () { 'use strict';

    function $(e) { return document.querySelector(e); }

    function createCols(pad) {
        const col = document.createElement('div');
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.style.gap = `${pad}px`;
        col.style.flexGrow = '1';
        return col;
    }
    function makeSpaceX(spaceY, container) {
        $(`${container}`).style.display = `flex`;
        $(`${container}`).style.gap = `${spaceY}px`;
    }
    function getResponsiveCol() {
        const config = {
            default: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
        };
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
    function initItemsCounter(col) {
        const items = [];
        for (let k = 0; k < col; k++) {
            items.push(0);
        }
        return items;
    }

    function masonry({ col, renderItems, container, spaceX, spaceY, gap = 4, debug = false }) {
        if (!col) {
            col = getResponsiveCol();
        }
        let nItemByCols = renderItems.length / col;
        let nLastItemCols = nItemByCols;
        if (!spaceX)
            spaceX = gap;
        if (!spaceY)
            spaceY = gap;
        makeSpaceX(spaceX, container);
        let cols = [];
        let itemsCounter = initItemsCounter(col);
        for (let i = 0; i < col; i++) {
            cols.push(createCols(spaceY));
        }
        if (renderItems.length % col != 0) {
            nLastItemCols = renderItems.length % col;
        }
        if (debug) {
            console.log(` - There are ${col} columns`);
            console.log(` - Recieved ${renderItems.length} items`);
            console.log(` - Each column has ${nItemByCols} rows`);
            nLastItemCols != nItemByCols ? console.log(` - The first column has ${nLastItemCols} rows`) : '';
            console.log(` - ItemsCounter = ${itemsCounter}`);
        }
        for (let i = 0; i < renderItems.length; i++) {
            renderItems[i].style.transition = 'all 0.3s ease';
            cols[i % col].appendChild(renderItems[i]);
            itemsCounter[i % col] += 1;
        }
        for (let colElement of cols) {
            $(`${container}`).appendChild(colElement);
        }
        if (debug) {
            console.log('terminé');
        }
    }

    return masonry;

}));
