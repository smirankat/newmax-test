(async () => {
  const res = await fetch(
    "https://card.wb.ru/cards/v1/detail?appType=1&curr=rub&dest=-1257786&spp=27&nm=189785767;160738996;183270278;183269075;183266945;36328331;146972802;154611222;166416619;166417437;178144226;190456385;190879343;178142953;183271022;182770058;160737571;190627235;160740830;173462958;67508839"
  );
  const data = await res.json();
  const kazanWB = data.data.products.map((item) => {
    const stock = {};
    const sizes = item.sizes.map((size) => size.origName);
    const qty = item.sizes.map((size) =>
      size.stocks.find((n) => n.wh === 117986)
        ? size.stocks.find((n) => n.wh === 117986).qty
        : 0
    );
    for (let i = 0; i < sizes.length; i++) {
      stock[sizes[i]] = qty[i];
    }
    return { art: item.id, stock: stock };
  });
  console.log(kazanWB);
})();
