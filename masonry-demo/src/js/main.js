const $ = (e) => document.querySelector(e);
const $$ = (e, ev = undefined, callback = undefined) => {
    const all = document.querySelectorAll(e);
    if (ev && callback) {
        all.forEach(k => {
            k.addEventListener(ev, callback(k));
        });
    }
    return all;
}

import masonry from '/dist/masonry.js';

var renderTestItems = [
"Lorzm ipusum dolor asset management and CSS JS Bach et de personnes touchées par exemple de la même chose que je.",
"je veux un peu plus de détails sur les listes en python royal de la femme de la même ligne que tu.",
"je veux bien et toi comment vas-tu en cette fin  d'année  je  veux  un crédit  vous  avez reçu cet exercice .",
"on peut se faire un point sur le site web de l'entreprise et le prix est de la.",
"de la femme de la même ligne que tu as besoin de plus de.",
"Lorzm ipusum dolor asset management and CSS JS Bach et de personnes touchées par exemple de la même chose que je.",
"je veux un peu plus de détails sur les listes en python royal de la femme de la même ligne que tu.",
"je veux bien et toi comment vas-tu en cette fin  d'année  je  veux  un crédit  vous  avez reçu cet exercice .",
"on peut se faire un point sur le site web de l'entreprise et le prix est de la.",
"de la femme de la même ligne que tu as besoin de plus de."
];

const __new = (a) => {
    
    const tagName=a.tagName,
    className = a.className ?? undefined,
    style = a.style ?? undefined,
    html = a.html ?? undefined,
    text = a.text ?? undefined;
    
    const __i = document.createElement(tagName);
    __i.setAttribute('class', `${className ?? ''}`);
    __i.innerHTML = html ?? '';
    __i.innerText = text ?? '';
    __i.style = style ?? '';
    return __i;
}


renderTestItems.push(...renderTestItems);
renderTestItems.push(...renderTestItems);

masonry({
    col: 4,
    spaceX: 5,
    spaceY: 5,
    renderItems: (() => {
        const items= [];
        
        for (let i = 0; i < renderTestItems.length; i++) {
            const __k = __new({
				tagName: 'div',
				className: 'dash-card',
				text: renderTestItems[i],
				style: "color: #999; border: .05rem solid; border-radius: .5rem",
          	});
            items.push(__k);
        }
        return items;
    })(),
    container: '.container',
});
