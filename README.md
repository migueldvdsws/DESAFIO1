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

Uso
Registrar una cita
Para registrar una nueva cita debes usar el comando:

bash
Copiar
Editar
node index.js registrar <nombre> <edad> <tipo de animal> <color> <enfermedad>
Ejemplo:

bash
Copiar
Editar
node index.js registrar Benito "2 años" perro blanco vomitos
Leer todas las citas
Para leer las citas registradas:

bash
Copiar
Editar
node index.js leer
Notas
El archivo citas.json se actualiza automáticamente con las nuevas citas.

Los argumentos se deben ingresar en el orden indicado y sin omitir ninguno para la función registrar.

Requisitos
Node.js instalado en el sistema.

Autor
Miguel Ruiz

