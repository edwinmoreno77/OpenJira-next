# NextJs Open Jira App

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/edwinmoreno77/OpenJira-next/blob/main/assets/dragAndDrog.gif" alt="dragAndDrog" width="500">
  <img src="https://github.com/edwinmoreno77/OpenJira-next/blob/main/assets/themeChanged.gif" alt="themeChanged" width="500">
</div>

To run locally, you need the database.

```
docker-compose up -d
```

MongoDB URL Local:
mongodb://localhost:27017//entriesdb

## Configure environment variables

Rename the file **.env.template** to: **.env**

- Rebuild Node modules:
  ` yarn install`
- run dev: ` yarn dev`

## Fill the database with test information

```
   http://localhost:3000/api/seed

```
