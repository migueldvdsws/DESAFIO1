# Veterinaria - Registro de Citas

Este proyecto es una pequeña aplicación backend desarrollada en Node.js para registrar y leer las citas de atención en una veterinaria.

---

## Archivos principales

- **index.js**: Punto de entrada del programa. Recibe argumentos por línea de comandos para registrar o leer citas.
- **operaciones.js**: Contiene las funciones para registrar nuevas citas y leer las existentes desde un archivo JSON.
- **citas.json**: Archivo JSON que almacena todas las citas en un arreglo.

---

## Instalación y ejecución

1. Clona o descarga este repositorio.
2. Abre la terminal y navega a la carpeta del proyecto.
3. Inicializa Node.js (si no lo has hecho):

```bash
npm init -y
Ejecuta comandos desde la terminal para interactuar con la aplicación.


1. Registrar una cita
Para registrar una nueva cita debes usar el comando:

node index.js registrar Benito "2 años" perro blanco vomitos

2. leer una cita:
Para Leer  una nueva cita debes usar el comando:
node index.js leer

Requisitos
Node.js instalado en el sistema.

Autor
Miguel Ruiz

