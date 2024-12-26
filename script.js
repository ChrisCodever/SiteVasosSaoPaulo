function criarFolha(event) {
  const link = event.target; // O link onde o mouse está
  const folha = document.createElement('img'); // Criando uma imagem
  folha.src = './images/folhas.png'; // Caminho para a imagem da folha
  folha.alt = 'Folha'; // Texto alternativo para acessibilidade
  folha.classList.add('folha'); // Adiciona a classe para estilização e animação

  // Define posição inicial aleatória dentro do link
  const linkRect = link.getBoundingClientRect();
  folha.style.left = `${Math.random() * linkRect.width}px`;
  folha.style.top = `0px`;

  // Define a posição relativa ao link
  folha.style.position = 'absolute';
  link.style.position = 'relative'; // Garante que o link é um contêiner posicionado
  link.appendChild(folha); // Adiciona a folha ao link

  // Remove a folha após a animação terminar
  folha.addEventListener('animationend', () => folha.remove());
}

// Adiciona o evento de mouseover a todos os links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', criarFolha);
});
