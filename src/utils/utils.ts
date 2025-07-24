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

export {makeSpaceX, createCols};
