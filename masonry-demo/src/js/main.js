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

/*const __new = (a) => {
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
}*/

function __new({ tagName, className, text, innerHTML, style }) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text) el.textContent = text;
  if (innerHTML) el.innerHTML = innerHTML;
  if (style) el.setAttribute('style', style);
  return el;
}

/*
const renderTestItems = [
  __new({
    tagName: 'div',
    className: 'dash-card',
    text: '📦 Carte produit',
    style: 'background: #f9f9f9; padding: 1rem; border-radius: .5rem; box-shadow: 0 0 5px #ddd;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<img src="https://picsum.photos/200/280?random=1" style="width: 100%; border-radius: .5rem;">',
    style: 'background: #fafafa; padding: .5rem; border-radius: .5rem; box-shadow: 0 0 4px #ccc;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    text: '💡 Astuce #1\nUtilise une disposition fluide pour t’adapter à l’écran.',
    style: 'white-space: pre-wrap; background: #fefae0; padding: 1rem; border-left: 4px solid #00bcd4; border-radius: .5rem;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<h4>📰 Article</h4><p>Contenu riche avec texte de test pour voir la hauteur variable.</p>',
    style: 'padding: 1rem; background: #f5f5f5; border-radius: .5rem; border: 1px solid #ddd;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<img src="https://picsum.photos/200/310?random=2" style="width: 100%; border-radius: .5rem;">',
    style: 'background: #fafafa; padding: .5rem; border-radius: .5rem; box-shadow: 0 0 6px #ccc;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    text: '🛒 Panier - 3 articles',
    style: 'padding: 1rem; background: #eceff1; border: 1px dashed #90a4ae; border-radius: .5rem;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<img src="https://picsum.photos/200/260?random=3" style="width: 100%; border-radius: .5rem;">',
    style: 'padding: .5rem; background: #f8f9fa; box-shadow: 0 0 4px #bbb; border-radius: .5rem;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<h3>🎬 Vidéo</h3><p>Ici on teste du contenu textuel avec titre.</p>',
    style: 'padding: 1rem; background: #fff3e0; border-left: 4px solid #fb8c00; border-radius: .5rem;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    text: '📅 Événement : Conférence Web à 14h',
    style: 'padding: 1rem; background: #e3f2fd; border: 1px solid #90caf9; border-radius: .5rem;'
  }),
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: '<img src="https://picsum.photos/200/300?random=4" style="width: 100%; border-radius: .5rem;">',
    style: 'padding: .5rem; background: #f9f9f9; border-radius: .5rem; box-shadow: 0 0 6px #ccc;'
  })
];*/

const produits = [
  {
    titre: "Casque Bluetooth",
    prix: "18 000 FCFA",
    image: "https://picsum.photos/200/260?random=10",
    desc: "Son HD, autonomie 12h, compatible Android/iOS."
  },
  {
    titre: "Montre connectée",
    prix: "15 000 FCFA",
    image: "https://picsum.photos/200/260?random=11",
    desc: "Cardio, notifications, bracelet silicone résistant."
  },
  {
    titre: "Enceinte portable",
    prix: "9 500 FCFA",
    image: "https://picsum.photos/200/260?random=12",
    desc: "Bluetooth 5.0, étanche IPX6, basses puissantes."
  },
  {
    titre: "Mini ventilateur USB",
    prix: "3 000 FCFA",
    image: "https://picsum.photos/200/260?random=13",
    desc: "Compact, silencieux, idéal bureau ou voyage."
  },
  {
    titre: "Sac à dos étanche",
    prix: "12 500 FCFA",
    image: "https://picsum.photos/200/260?random=14",
    desc: "Design urbain, compartiment laptop, 25L."
  },
  {
    titre: "Lampe LED rechargeable",
    prix: "6 000 FCFA",
    image: "https://picsum.photos/200/260?random=15",
    desc: "Lumière blanche chaude, 3 niveaux d’intensité."
  }
];

var renderTestItems = produits.map(p =>
  __new({
    tagName: 'div',
    className: 'dash-card',
    innerHTML: `
      <div class="product-card">
        <img src="${p.image}" alt="${p.titre}" class="product-image" />
        <h3 class="product-title">${p.titre}</h3>
        <p class="product-price">${p.prix}</p>
        <p class="product-desc">${p.desc}</p>
      </div>
    `,
    style: 'background: #fff; padding: .8rem; border-radius: .75rem; box-shadow: 0 0 6px #ddd;'
  })
);

renderTestItems.push(...renderTestItems);
renderTestItems.push(...renderTestItems);

masonry({
    col: 4,
    spaceX: 5,
    spaceY: 5,
    renderItems: renderTestItems,
    container: '.container',
});

/*
(() => {
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
*/