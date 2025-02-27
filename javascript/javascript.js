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