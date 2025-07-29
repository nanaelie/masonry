import $ from './constants/constants';
import {
    makeSpaceX,
    createCols,
    getResponsiveCol,
    initItemsCounter
} from './src/utils/utils';
import { MasonryProps } from './src/interfaces/interfaces';

function masonry({ col, renderItems, container, spaceX = 1, spaceY = 1, debug = false }: MasonryProps) {
    let nItemByCols: number = renderItems.length / col;
    let nLastItemCols: number = nItemByCols;
    let last = 0;
    
    makeSpaceX(spaceX, container);

    let cols: HTMLElement[] = [];
    let itemsCounter: number[] = initItemsCounter(col);

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
        last = i % col;
    }

    for (let colElement of cols) {
        $(`${container}`).appendChild(colElement);
    }

    if (debug) {
        console.log('terminé');
    }

    return {
        append(item: HTMLElement) {
            cols[last].append(item);
            $(`${container}`).appendChild(cols[last]);
        }
    }
}

export default masonry;
