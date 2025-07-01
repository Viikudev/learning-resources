# Recursos de Aprendizaje (Prueba Tecnica)

La idea es desarrollar una aplicación web de catálogo para "Recursos de Aprendizaje", utilizando:

- Strapi v4 para gestionar el contenido (como puede ser artículo, video, etc).
- Next.js con TypeScript y Tailwind CSS para construir el frontend que consumirá los datos de Strapi, tendrá:
  - Una página donde se mostrará todos los recursos.
  - Una página individual por cada recurso donde va a estar la información detallada de cada recurso la cual permitirá marcarlos como favoritos.
- Microservicio independiente construido con NestJS y TypeScript que expondrá una API REST para manejar toda la lógica de la funcionalidad de Favoritos (añadir, quitar, listar, verificar estado). Dado que no se implementará autenticación completa para esta prueba,
  se puede simular un userId fijo (ej: 'testUser123') o pasarlo como parámetro en la URL. Este debe manejar un almacenamiento simple (puede ser un array/map en memoria) para guardar los IDs de los Resources marcados como favoritos por un usuario.

## Instalacion

- En un principio es necesario tener instalado Node.js en la maquina, el proyecto fue desarrollado con la version 20.19.1 asi que se recomienda usar dicha version.
- Entrar a la terminal y ejecutar el comando a continuacion en el directorio donde se desea trabajar:

```bash
git clone https://github.com/Viikudev/prueba-tecnica.git
```

- Crear 3 instancias de la terminal, una para el proyecto de Next.js, otra para Nest.js y otra para Strapi.
- Ejecutar el siguiente comando en cada una de las instancias

```bash
npm install
```

- Ejecutar el siguiente comando para ejecutar el proyecto de Nest.js:

```bash
npm run start
```

- Ejecutar el siguiente comando para ejecutar el proyecto de Strapi:

```bash
npm run develop
```

- Ejecutar el siguiente comando para ejecutar el proyecto de Next.js:

```bash
npm run dev
```

- Ingresar a la URL que proporciona la terminal en Next.js, normalmente es http://localhost:3000/

## License

[MIT](https://choosealicense.com/licenses/mit/)
