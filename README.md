# Dogs-API
This is a simple REST API with Node.js and Express.js with Typescript

## Run the System
We can easily run the whole project with only a single command:
```bash
docker-compose up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

## Commands

### This command initializes the database(creates the database if not exist, creates tables then populates data)
```bash
yarn run initialize:db
```

### This command starts the server
```bash
yarn start
```

### This command runs the tests
```bash
yarn test
```
