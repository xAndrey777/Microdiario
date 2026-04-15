const form = document.getElementById('diary-form');
const input = document.getElementById('diary-input');
const list = document.getElementById('entries-list');

// 1. Cargar datos guardados (si existen)
let memories = JSON.parse(localStorage.getItem('my_memories')) || [];

function updateUI() {
    list.innerHTML = '';
    memories.forEach(m => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="date">${m.date}</span> ${m.text}`;
        list.appendChild(li);
    });
}

// 2. Guardar nueva entrada
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newMemory = {
        text: input.value,
        date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
    };

    memories.unshift(newMemory); // Añadir al principio
    localStorage.setItem('my_memories', JSON.stringify(memories));
    
    input.value = '';
    updateUI();
});

// Inicializar la lista al cargar
updateUI();
