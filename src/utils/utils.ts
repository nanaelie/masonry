import $ from '../../constants/constants';

function createCols(pad: number): HTMLElement {
    const col: HTMLElement = document.createElement('div');
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.gap = `${pad}px`;
    col.style.flexGrow = '1';
    return col;
}

function makeSpaceX(spaceY: number, container: string) {
    $(`${container}`).style.display = `flex`;
    $(`${container}`).style.gap = `${spaceY}px`;
}

function styleContainer(container: string) {
	$(`${container}`).style.padding = '4px';
}

function getResponsiveCol(): number {
	const config = {
		default: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	}
    const w = window.innerWidth;
    if (w >= 1280 && config.xl) return config.xl;
    if (w >= 1024 && config.lg) return config.lg;
    if (w >= 768 && config.md) return config.md;
    if (w >= 640 && config.sm) return config.sm;
    return config.default || 1;
}

/*function getLastFilledRowIndex(cols: HTMLDivElement[]) {
    let lastIndex = 0;
    for (let i in cols) {
        // if (cols[i].querySelectorAll('*'))
    }
}*/

function initItemsCounter(col: number): number[] {
    const items: number[] = [];
    for (let k = 0; k < col; k++) {
        items.push(0);
    }
    return items;
}

export { makeSpaceX, createCols, getResponsiveCol, initItemsCounter };
