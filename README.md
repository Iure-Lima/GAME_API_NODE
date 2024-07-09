# GAME_API_NODE

This is an API for managing game data, built with Node.js and MongoDB. The API allows you to create, read, update and delete game information. This project uses the following dependencies:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/pt-br/)
- [mongoose](<https://mongoosejs.com/docs/api/connection.html#Connection()>)
- [express-validator](https://www.npmjs.com/package/express-validation)

## Author

The creator of this code is Iure Lima

## Requirements

- Node.js
- Docker

## Configurations

1. Clone the repository:

```bash
git clone git@github.com:Iure-Lima/GAME_API_NODE.git
```

2. Install the dependencies:

```bash
npm i
```

3. Configure the environment variables. Create a file `.env` in the project:

```env
PORT = 3000
USERNAME_DB= root
PASSWORD_DB= root
DATABASE_NAME= games_management
PORT_DB=27017
```

4. Start the docker container:

```bash
docker-compose up -d
```

## Start the API

Start the API with the command:

```bash
npm run start
```

The service is running on this link: [http://localhost:3000](http://localhost:3000)

## Endpoints

### Create the Game:

The router for this: [POST http://localhost:3000/game](http://localhost:3000/game)

Body for Input JSON:

```json
{
  "name": "Minecraft",
  "description": "The best game for the world",
  "genre": "Construction",
  "platform": "Windows, Linux, Mac OS, Android, iOS"
}
```

Output JSON:

```json
{
  "id": "668d8a80cfb8773c65c44598",
  "name": "Minecraft",
  "description": "The best game for the world",
  "genre": "Construction",
  "platform": "Windows, Linux, Mac OS, Android, iOS"
}
```

### Get the list of all Games:

The router for this: [GET http://localhost:3000/game](http://localhost:3000/game)

Output JSON:

```json
[
  {
    "id": "668d8a80cfb8773c65c44598",
    "name": "Minecraft",
    "description": "The best game for the world",
    "genre": "Construction",
    "platform": "Windows, Linux, Mac OS, Android, iOS"
  },
  {
    "id": "668d8cb2cfb8773c65c4459d",
    "name": "Valorant",
    "description": "The most famous FPS game today",
    "genre": "FPS",
    "platform": "Windows"
  }
]
```

### Get the Game:

The router for this: [GET http://localhost:3000/game/:id](http://localhost:3000/game)

Output JSON:

```json
{
  "id": "668d8a80cfb8773c65c44598",
  "name": "Minecraft",
  "description": "The best game for the world",
  "genre": "Construction",
  "platform": "Windows, Linux, Mac OS, Android, iOS"
}
```

### Update the Game:

The router for this: [PUT http://localhost:3000/game/:id](http://localhost:3000/game)

Body for Input JSON:

```json
{
  "name": "Minecraft 1.21",
  "description": "The best game for the world",
  "genre": "Construction",
  "platform": "Windows, Linux, Mac OS, Android, iOS"
}
```

Output JSON:

```json
{
  "id": "668d8a80cfb8773c65c44598",
  "name": "Minecraft",
  "description": "The best game for the world",
  "genre": "Construction",
  "platform": "Windows, Linux, Mac OS, Android, iOS"
}
```

### Delete the Game:

The router for this: [DELETE http://localhost:3000/game/:id](http://localhost:3000/game)

This request don't have a response body.

### Partial game update:

The router for this: [PATCH http://localhost:3000/game/:id](http://localhost:3000/game)

Body for Input JSON:

```json
{
  "name": "Valorant v4"
}
```

Output JSON:

```json
{
  "id": "668d8cb2cfb8773c65c4459d",
  "name": "Valorant v4",
  "description": "The most famous FPS game today",
  "genre": "FPS",
  "platform": "Windows"
}
```
