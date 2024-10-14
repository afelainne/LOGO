
// Arquivo: script.js

// Função para carregar o SVG preto e branco do arquivo e injetar na página
function loadSVG() {
    fetch('Group 3707.svg') // Nome do arquivo SVG
    .then(response => response.text())
    .then(data => {
        svgTemplate = data;  // Armazenar o template para replicar
        renderSVGs(); // Renderizar o número inicial de formas
    });
}

let svgTemplate = ''; // Template do SVG para duplicar

const colors = {
    color1: document.getElementById('color1').value,
    color2: document.getElementById('color2').value,
    color3: document.getElementById('color3').value,
    color4: document.getElementById('color4').value,
    color5: document.getElementById('color5').value,
    color6: document.getElementById('color6').value,
    color7: document.getElementById('color7').value,
};

function applyColorChanges() {
    // Seleciona todos os elementos SVG que foram renderizados
    const svgElements = document.querySelectorAll('#svgDisplay svg path');

    svgElements.forEach((element, index) => {
        if (index % 7 === 0) element.setAttribute('fill', colors.color1);
        else if (index % 7 === 1) element.setAttribute('fill', colors.color2);
        else if (index % 7 === 2) element.setAttribute('fill', colors.color3);
        else if (index % 7 === 3) element.setAttribute('fill', colors.color4);
        else if (index % 7 === 4) element.setAttribute('fill', colors.color5);
        else if (index % 7 === 5) element.setAttribute('fill', colors.color6);
        else if (index % 7 === 6) element.setAttribute('fill', colors.color7);
    });
}

function updateColors() {
    // Atualiza as cores com base nos controles
    colors.color1 = document.getElementById('color1').value;
    colors.color2 = document.getElementById('color2').value;
    colors.color3 = document.getElementById('color3').value;
    colors.color4 = document.getElementById('color4').value;
    colors.color5 = document.getElementById('color5').value;
    colors.color6 = document.getElementById('color6').value;
    colors.color7 = document.getElementById('color7').value;

    applyColorChanges(); // Aplicar cores atualizadas
}

function renderSVGs() {
    const quantity = document.getElementById('quantity').value;
    const svgDisplay = document.getElementById('svgDisplay');

    svgDisplay.innerHTML = '';  // Limpar SVGs anteriores

    for (let i = 0; i < quantity; i++) {
        // Injetar o SVG e posicionar
        const svgWrapper = document.createElement('div');
        svgWrapper.innerHTML = svgTemplate;
        svgWrapper.style.transform = `translate(${i * 20}px, ${i * 20}px)`; // Deslocamento para evitar sobreposição
        svgDisplay.appendChild(svgWrapper);
    }

    applyColorChanges(); // Aplicar as cores nas novas formas
}

// Atualiza a quantidade de formas e o label correspondente
function updateQuantity() {
    const quantity = document.getElementById('quantity').value;
    document.getElementById('quantity-label').textContent = `Quantidade de Formas: ${quantity}`;
    renderSVGs(); // Renderizar novamente com a nova quantidade
}

// Event listeners para os controles de cor
document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', updateColors);
});

// Event listener para o controle de quantidade
document.getElementById('quantity').addEventListener('input', updateQuantity);

// Carregar o SVG e aplicar cores e quantidade iniciais
loadSVG();
