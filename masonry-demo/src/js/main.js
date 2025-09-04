const produits = [
	{
		titre: "Casque Sony WH-CH720N",
		prix: "69,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Casque-audio-sans-fil-SONY-Bluetooth-a-reduction-de-bruit-WH-CH720N-Noir-removebg-preview.png",
		desc: "Casque sans fil à réduction de bruit active. Son immersif, autonomie longue durée, design léger."
	},
	{
		titre: "Écouteurs I18 TWS Blanc",
		prix: "14,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteur-Bluetooth-Charge-Du-Controle-Tactile-Sans-Fil-Intelligent-I18-Tws-Blanc-removebg-preview.png",
		desc: "Écouteurs Bluetooth avec contrôle tactile intelligent, boîtier de charge compact, bonne autonomie."
	},
	{
		titre: "Xiaomi Redmi Buds 6 Pro",
		prix: "29,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-intra-auriculaires-sans-fil-Bluetooth-Xiaomi-Redmi-Buds-6-Pro-avec-reduction-de-bruit-Noir-removebg-preview.png",
		desc: "Intra-auriculaires à réduction de bruit, Bluetooth 5.3, son puissant et stable, boîtier ergonomique."
	},
	{
		titre: "Bose QC Earbuds II",
		prix: "249,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-sans-fil-Bluetooth-Bose-QuietComfort-Earbuds-II-avec-reduction-de-bruit-Noir-removebg-preview.png",
		desc: "Qualité audio exceptionnelle avec ANC de pointe. Confort supérieur et autonomie jusqu’à 24h."
	},
	{
		titre: "JBL Tune Flex",
		prix: "49,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-sans-fil-Bluetooth-JBL-Tune-Flex-avec-reduction-de-bruit-Noir-removebg-preview.png",
		desc: "Écouteurs JBL au son Pure Bass. Réduction active du bruit, résistants à l’eau (IPX4), autonomie fiable."
	},
	{
		titre: "Bose Ultra Open (Blanc)",
		prix: "299,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-sans-fil-Bose-Ultra-Open-Earbuds-Blanc-removebg-preview.png",
		desc: "Conception ouverte pour écoute immersive et environnementale. Design unique et confort longue durée."
	},
	{
		titre: "Bose Ultra Open (Noir)",
		prix: "299,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-sans-fil-Bose-Ultra-Open-Earbuds-Noir-removebg-preview.png",
		desc: "Même expérience Bose Ultra Open en noir élégant. Audio premium et maintien parfait à l’oreille."
	},
	{
		titre: "Samsung Galaxy Buds3 Pro",
		prix: "199,99 €",
		image: "https://cdn.jsdelivr.net/gh/nanaelie/masonry/masonry-demo/src/images/Ecouteurs-sans-fil-Samsung-Galaxy-Buds3-Pro-Bluetooth-avec-reduction-active-du-bruit-Argent-removebg-preview.png",
		desc: "Design futuriste, réduction active du bruit (ANC), audio AKG, chargement rapide, compatibilité Android/iOS."
	}
];


produits.push(...produits);

function __new(options) {
	const el = document.createElement(options.tagName);

	if (options.className) el.className = options.className;
	if (options.text) el.textContent = options.text;
	if (options.style) el.setAttribute('style', options.style);

	if (options.attrs) {
		for (const key in options.attrs) {
			if (Object.hasOwn(options.attrs, key)) {
				el.setAttribute(key, options.attrs[key]);
			}
		}
	}

	if (Array.isArray(options.children)) {
		for (const child of options.children) {
			el.appendChild(child);
		}
	}

	return el;
}

const renderTestItems = produits.map((p) =>
	__new({
		tagName: 'div',
		className: 'dash-card',
		style: 'background: #fff; padding: .8rem; border-radius: .75rem; box-shadow: 0 0 6px #ddd;',
		children: [
			__new({
				tagName: 'img',
				className: 'product-image',
				attrs: {
					src: p.image,
					alt: p.titre
				}
			}),
			__new({
				tagName: 'h3',
				className: 'product-title',
				text: p.titre
			}),
			__new({
				tagName: 'p',
				className: 'product-price',
				text: p.prix
			}),
			__new({
				tagName: 'p',
				className: 'product-desc',
				text: p.desc
			}),
			__new({
				tagName: 'button',
				className: 'product-buy',
				text: "Acheter"
			})
		]
	})
);

masonry({
	col: 4,
	spaceX: 5,
	spaceY: 5,
	renderItems: renderTestItems,
	container: '.container',
	debug: true,
});
