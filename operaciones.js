// operaciones.js
const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log("Cita registrada con éxito.");
};

// Función para leer citas
const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log("Citas registradas:");
    console.log(citas);
};

// Exportar funciones
module.exports = { registrar, leer };
