'use strict';

var jsxRuntime = require('react/jsx-runtime');

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

function ColElement({ pad, children }) {
    const col = document.createElement('div');
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.gap = `${pad}px`;
    col.style.flexGrow = '1';
    return (jsxRuntime.jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: `${pad}px`, flexGrow: 1 }, children: children }));
}

class Masonry extends HTMLDivElement {
    connectedCallback() {
        var _a;
        const renderItems = this.getAttribute('render-items');
        console.log("hello");
        if (!renderItems) {
            this.innerHTML = '<h1>Hello World!</h1>';
            return;
        }
        var col = this.getAttribute('cols');
        this.getAttribute('space-x');
        var spaceY = this.getAttribute('space-y');
        var gap = (_a = this.getAttribute('gap')) !== null && _a !== void 0 ? _a : 4;
        col = Number(col);
        spaceY = Number(spaceY);
        gap = Number(gap);
        if (!col) {
            col = getResponsiveCol();
        }
        const container = [];
        if (!spaceY)
            spaceY = gap;
        let cols = [];
        let itemsCounter = initItemsCounter(col);
        for (let i = 0; i < col; i++) {
            cols.push(jsxRuntime.jsx(ColElement, { pad: spaceY, children: jsxRuntime.jsx("div", {}) }));
        }
        for (let i = 0; i < renderItems.length; i++) {
            cols[i % col].props['children'] = (renderItems[i]);
            itemsCounter[i % col] += 1;
        }
        for (let colElement of cols) {
            container.push(colElement);
        }
        this.innerHTML = `
            <div style={{ display: 'flex', gap: ${spaceY}px, width: 'auto' }}>
                ${container}
            </div>
        `;
        return;
    }
}
customElements.define("masonry", Masonry);

exports.ColElement = ColElement;
exports.Masonry = Masonry;
