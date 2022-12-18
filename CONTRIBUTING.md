# CONTRIBUTING

![](https://i.giphy.com/media/ntMt6TvalpstTIx7Ak/giphy.webp)

__Requerimientos:__
- Node v16 o superior __[descargar node](https://nodejs.org/es/download/)__
- __[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)__ como gestor de paquetes. En el link conseguirás las intrucciones para instalar yarn.
- __[VSCode](https://code.visualstudio.com/download)__ (recomendado): Editor de código con plugins.
- __[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits&ssr=false#overview)__ (plugin-vscode) este plugin te ayudará a crear commit semántico.
- Se usará la rama __dev__ *(https://github.com/leifermendez/bot-whatsapp/tree/dev)* como rama principal hasta que se haga oficialmente el lanzamiento de la V2.

### 🚀 Iniciando

__Clonar repo rama dev__
```
git clone --branch dev https://github.com/codigoencasa/bot-whatsapp
```
__Instalar dependencias__
``` 
cd bot-whatsapp
yarn install
```

__Compilar (build)__
Para compilar la aplicación es necesario ejecutar este comando, el cual genera un directorio `lib` dentro de los paquetes del monorepo.

```
yarn build
```

__Example-app__
Se ejecuta el CLI (Command Line Interface) para ayudarte a crear un app-bot de ejemplo.
```
yarn run cli
```

__Seguir instrucciones__
En la consola encontraras los pasos a seguir

![](https://i.imgur.com/dC6lEwy.png)

__Observaciones__
Se debe tener en cuenta que si queremos utilizar una base de datos de MySQL, como muestra el ejemplo, será necesario actualizar las credenciales o crear previamente un usuario y una BBDD para que la conexión se realice correctamente.
Las credenciales que usará la aplicación por defecto se encuentran en el fichero app.js y serán las siguientes:
```
const MYSQL_DB_HOST = 'localhost'
const MYSQL_DB_USER = 'user'
const MYSQL_DB_PASSWORD = 'pass'
const MYSQL_DB_NAME = 'bot'
```

### 🤔 Preguntas frecuentes
- ¿Como puedo hacer aportaciones de código en el proyecto?: [Ver Video](https://youtu.be/Lxt8Acob6aU)
- ¿Como ejecutar el entorno de pruebas?: [Ver Video](https://youtu.be/Mf9V-dloBfk)
- ¿Como crear un nuevo proveedor?: [Ver Video](https://youtu.be/cahK9zH3SI8)
- ¿Que son los GithubActions?: [Ver Video](https://youtu.be/nYBEBFKLiqw)


> __NOTA:__ Documento en constante actualización....

------
-   [Discord](https://link.codigoencasa.com/DISCORD)
-   [Twitter](https://twitter.com/leifermendez)
-   [Youtube](https://www.youtube.com/watch?v=5lEMCeWEJ8o&list=PL_WGMLcL4jzWPhdhcUyhbFU6bC0oJd2BR)
-   [Telegram](https://t.me/leifermendez)
