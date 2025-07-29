import $ from '../../constants/constants';
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
function initItemsCounter(col) {
    const items = [];
    for (let k = 0; k < col; k++) {
        items.push(0);
    }
    return items;
}
export { makeSpaceX, createCols, getResponsiveCol, initItemsCounter };
