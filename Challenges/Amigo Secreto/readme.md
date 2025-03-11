# Amigo Secreto

## Introducción

Este es un challenge que me dieron en el programa OracleONE, donde desarrollé una aplicación web para realizar un sorteo de "Amigo Secreto". La idea principal era permitir a los usuarios ingresar nombres en una lista y luego realizar un sorteo aleatorio para determinar quién será el "amigo secreto".

Aunque la base del proyecto fue proporcionada en el challenge, me tomé la libertad de modificar y mejorar el código. Cambié el diseño en CSS y HTML para hacerlo más atractivo y funcional. Además, agregué varias mejoras, como:

- Botones para eliminar los nombres individualmente y limpiar todo.
- Un toast de notificaciones en lugar de alertas invasivas.
- La posibilidad de presionar la tecla Enter para agregar nombres sin necesidad de hacer clic en el botón.
- Validaciones adicionales para evitar inyecciones de scripts.

## Funcionalidades

### Agregar nombres

Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a la lista haciendo clic en el botón **"Añadir"** o presionando la tecla **Enter**.

### Validar entrada

Si el campo de texto está vacío o contiene solo espacios, la aplicación muestra un toast con un mensaje de error en lugar de un **alert**.

### Visualizar la lista

Los nombres ingresados aparecen en una lista debajo del campo de entrada.

### Eliminar nombres

Cada nombre agregado tiene un botón de **"X"** roja a su derecha para permitir su eliminación de la lista.

### Sorteo aleatorio

Al hacer clic en el botón **"Sortear Amigo"**, se selecciona aleatoriamente un nombre de la lista y se muestra en la página.

## Consignas dadas en el challenge

### 1. Declaración del array

Se debía declarar una variable de tipo array para almacenar los nombres ingresados:

```js
let amigos = [];
```

### 2. Implementación de la función para agregar amigos

Se requería capturar el valor del campo de entrada usando `document.getElementById` o `document.querySelector`, validar que no esté vacío y añadirlo al array con `.push()`. Luego, limpiar el campo de entrada para facilitar la siguiente inserción.

### 3. Mostrar la lista

Se debía recorrer el array con un `for` y generar un `<li>` por cada nombre dentro de una lista HTML. Antes de agregar los elementos, se debía limpiar la lista existente con `innerHTML = ""` para evitar duplicados.

### 4. Sorteo aleatorio

Se debía implementar una función que seleccionara un nombre aleatorio del array usando `Math.random()` y `Math.floor()`, validando que haya nombres disponibles antes de ejecutar el sorteo.

## Requisitos para ejecutar el proyecto

Para correr esta aplicación, solo necesitas:

- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Descargar los archivos HTML, CSS, JavaScript y la carpeta de assets.
- Abrir el archivo `index.html` en el navegador.

No se necesita ningún servidor ni configuración adicional, ya que es una aplicación web estática.
