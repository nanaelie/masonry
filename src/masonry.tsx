import {
    getResponsiveCol,
    initItemsCounter
} from './utils/utils';
import { type MasonryProps } from './masonry.types';
import { ReactNode } from 'react';

export function ColElement({ pad, children } : { pad: number, children: ReactNode}) {
    const col: HTMLElement = document.createElement('div');
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.gap = `${pad}px`;
    col.style.flexGrow = '1';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: `${pad}px`, flexGrow: 1 }}>
            {children}
        </div>
    );
}

function MasonryView({ col, renderItems, spaceX, spaceY, gap = 4}: MasonryProps): ReactNode {
    let last = 0;
    
    if (!col) {
    	col = getResponsiveCol()
    }
    
    const container: React.JSX.Element[] = [];
    
    if (!spaceX) spaceX = gap;
    if (!spaceY) spaceY = gap;

    let cols: React.JSX.Element[] = [];
    let itemsCounter: number[] = initItemsCounter(col);

    for (let i = 0; i < col; i++) {
        cols.push(
            <ColElement pad={spaceY} children={<div></div>} />
        );
    }

    for (let i = 0; i < renderItems.length; i++) {
        renderItems[i].style.transition = 'all 0.3s ease';
        
        cols[i % col].props['children'] = (renderItems[i]);
        itemsCounter[i % col] += 1;
        last = i % col;
    }

    for (let colElement of cols) {
        container.push(colElement);
    }

    return (
        <div style={{ display: 'flex', gap: `${spaceY}px`, width: 'auto' }}>
            {container}
        </div>
    )
}

export default MasonryView;
