// Função para filtrar os médicos pelo nome ou pela especialidade
function filterEspecialidades() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const filterEspecialidade = document.getElementById('filterEspecialidade').value.toLowerCase();
    const especialidadesContainer = document.getElementById('especialidadesContainer');
    const especialidades = especialidadesContainer.getElementsByClassName('especialidade');

    for (let especialidade of especialidades) {
        const nomeEspecialidade = especialidade.querySelector('h3').innerText.toLowerCase();
        const medicoText = especialidade.innerText.toLowerCase();

        const nomeMatches = medicoText.includes(searchBar);
        const especialidadeMatches = filterEspecialidade === '' || nomeEspecialidade.includes(filterEspecialidade);

        if (nomeMatches && especialidadeMatches) {
            especialidade.style.display = '';
        } else {
            especialidade.style.display = 'none';
        }
    }
}

// Eventos para filtrar enquanto digita
document.getElementById('searchBar').addEventListener('input', filterEspecialidades);
document.getElementById('filterEspecialidade').addEventListener('change', filterEspecialidades);

// Atualização das especialidades na lista
const especialidadesList = [
    "Otorrino",
    "Mastologista",
    "Endocrinologista",
    "Cardiologista",
    "Nutrólogo",
    "Ortopedista",
    "Urologista"
];

const filterSelect = document.getElementById('filterEspecialidade');

// Remove opções anteriores (mantendo apenas "Selecione uma especialidade")
filterSelect.innerHTML = '<option value="">Selecione uma especialidade</option>';

// Adiciona novas especialidades à lista
especialidadesList.forEach(especialidade => {
    const option = document.createElement('option');
    option.value = especialidade.toLowerCase();
    option.textContent = especialidade;
    filterSelect.appendChild(option);
});
