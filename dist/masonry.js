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
    function initItemsCounter(col) {
        const items = [];
        for (let k = 0; k < col; k++) {
            items.push(0);
        }
        return items;
    }

    function masonry({ col, renderItems, container, spaceX = 1, spaceY = 1, debug = false }) {
        let nItemByCols = renderItems.length / col;
        let nLastItemCols = nItemByCols;
        makeSpaceX(spaceX, container);
        let cols = [];
        let itemsCounter = initItemsCounter(col);
        for (let i = 0; i < col; i++) {
            cols.push(createCols(spaceY));
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
            $(`${container}`).appendChild(cols[i]);
        }
        if (debug) {
            console.log('terminé');
            console.log(` - There are ${col} columns`);
            console.log(` - Each column has ${nItemByCols} rows`);
            nLastItemCols != nItemByCols ? console.log(` - The first column has ${nLastItemCols} rows`) : '';
            console.log(` - ItemsCounter = ${itemsCounter}`);
        }
    }

    return masonry;

}));
