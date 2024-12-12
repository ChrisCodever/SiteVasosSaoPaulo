// Função para criar uma folha
function criarFolha(event) {
  const link = event.target; // O link onde o mouse está
  const folha = document.createElement('div');
  folha.classList.add('folha');

  // Define posição inicial aleatória
  folha.style.left = `${Math.random() * link.offsetWidth}px`;
  folha.style.top = `0px`;

  // Adiciona a folha ao link
  link.appendChild(folha);

  // Remove a folha após a animação terminar
  folha.addEventListener('animationend', () => folha.remove());
}

// Seleciona todos os links e adiciona o evento
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', criarFolha);
});
