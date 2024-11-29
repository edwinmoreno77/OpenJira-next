# NextJs Open Jira App

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/edwinmoreno77/OpenJira-next/blob/main/assets/dragAndDrog.gif" alt="dragAndDrog" width="500">
  <img src="https://github.com/edwinmoreno77/calendar-backend/blob/main/assets/calendarEvent.gif" alt="calendarEvent" width="500">
</div>

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
