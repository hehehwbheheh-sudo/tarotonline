async function drawCards() {
  const res = await fetch('data/tarot.json');
  const deck = await res.json();

  const selected = [];
  while (selected.length < 3) {
    const card = deck[Math.floor(Math.random() * deck.length)];
    if (!selected.includes(card)) selected.push(card);
  }

  const container = document.getElementById('cards');
  container.innerHTML = '';
  selected.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="assets/cards/${card.image}" alt="${card.name}" />
      <h3>${card.name}</h3>
      <p>${card.meaning}</p>
    `;
    container.appendChild(div);
  });
}