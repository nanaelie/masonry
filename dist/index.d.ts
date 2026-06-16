import { ReactNode } from 'react';

declare function ColElement({ pad, children }: {
    pad: number;
    children: ReactNode;
}): any;

declare class Masonry extends HTMLDivElement {
    connectedCallback(): void;
}

export { ColElement, Masonry };
