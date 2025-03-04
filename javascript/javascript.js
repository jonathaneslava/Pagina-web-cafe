// Obtener todas las casillas de verificación
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Función que verifica cuántas casillas están seleccionadas
function checkLimit() {
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // Si se seleccionan más de 3, deshabilitar las demás casillas
    if (checkedCount >= 3) {
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                checkbox.disabled = true;  // Deshabilitar casillas no seleccionadas
            }
        });
    } else {
        // Si hay menos de 3, habilitar todas las casillas
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;  // Habilitar todas las casillas
        });
    }
}

// Añadir un evento de cambio a cada checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkLimit);  // Llamar a la función cada vez que cambie el estado de una casilla
});

function incrementar(btn) {
    let numeroElemento = btn.closest("div").querySelector(".numero"); // Encuentra el número en el mismo div
    let numero = parseInt(numeroElemento.textContent); // Convierte el texto en número

    if (numero < 3) { 
        numero++;
        numeroElemento.textContent = numero; // Actualiza solo el número correspondiente
    }
}

function decrementar(btn) {
    let numeroElemento = btn.closest("div").querySelector(".numero");
    let numero = parseInt(numeroElemento.textContent);

    if (numero > 0) { 
        numero--;
        numeroElemento.textContent = numero;
    }
}