# A E S T H E T I C - R A D I O

Es una radio para programar, estudiar, trabajar o simplemente chatear con la gente que aqui se encuentra 📻

Ver demo : [A E S T H E T I C - R A D I O ](https://aesthetic-radio.herokuapp.com/)

## COMO INSTALAR 🤔

clone el proyecto o descarguelo directamente desde github
una vez hecho eso en tu terminal o consola ejecuta `npm i` para instalar los modulos del proyecto, una vez terminado ejecuta `npm start` para correr el proyecto en local.

## VARIABLES DE ENTORNO 🚀

Este proyecto cuenta con variables de entorno en el archivo `db.js`

```
├── README.MD
├── package-lock.json
├── package.json
└── src
    ├── db.js <--- Aqui
    ├── models
    │   └── user.model.js
    ├── public
    │   ├── css
    │   │   ├── all.css
    │   │   ├── icons
    │   │   │   └── webfonts
    │   │   │       ├── all.min.css
    │   │   │       ├── fa-brands-400.eot
    │   │   │       └── fa-brands-400.svg
    │   │   └── styles.css
    │   ├── index.html
    │   └── js
    │       ├── app.js
    │       ├── auth.js
    │       ├── chat.js
    │       ├── commandSystem.js
    │       ├── fetchApi.js
    │       └── sidebar.js
    ├── routes
    │   ├── index.routes.js
    │   └── user.routes.js
    └── server.js
```

modificar por la url de su base de datos mongodb y listo 😎

## COMO USAR 📑

lista de comandos para empezar a chatear.

1. `/help` para ver la lista de comandos
2. `/login` para logearte EJ. `/login ejemplo@gmail.com 123456`
3. `/register` para registrarte como nuevo usuario `/register user ejemplo@gmail.com 123456`
4. `/clear` para limpiar la ventana de chat
