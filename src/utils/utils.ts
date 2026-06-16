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

function initItemsCounter(col: number): number[] {
    const items: number[] = [];
    for (let k = 0; k < col; k++) {
        items.push(0);
    }
    return items;
}

export { getResponsiveCol, initItemsCounter };
