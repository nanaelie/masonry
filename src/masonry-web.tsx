import { ColElement } from './masonry';
import { getResponsiveCol, initItemsCounter } from './utils/utils';

export class Masonry extends HTMLDivElement {
    connectedCallback() {
        const renderItems: string | null | Element[] = this.getAttribute('render-items');

        console.log("hello")
        if (!renderItems) {
            this.innerHTML = '<h1>Hello World!</h1>';
            return;
        }

        var col: string | null | number = this.getAttribute('cols');
        var spaceX: string | null | number = this.getAttribute('space-x');
        var spaceY: string | null | number = this.getAttribute('space-y');
        var gap: string | null | number = this.getAttribute('gap') ?? 4;

        col = Number(col);
        spaceX = Number(spaceX);
        spaceY = Number(spaceY);
        gap = Number(gap);

        let last = 0;
        
        if (!col) {
            col = getResponsiveCol();
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
            // renderItems[i].style.transition = 'all 0.3s ease';
            
            cols[i % col].props['children'] = (renderItems[i]);
            itemsCounter[i % col] += 1;
            last = i % col;
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