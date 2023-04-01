# NextJs Open Jira App

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:
mongodb://localhost:27017//entriesdb

## Configurar las variables de entorno

Renombar el archivo **.env.template** a: **.env**

- Reconstruir los módulos de Node:
  ` yarn install`
- Levantar Next: ` yarn dev`

## LLenar la base de datos con información de pruebas

llamara:

```
   http://localhost:3000/api/seed

```
