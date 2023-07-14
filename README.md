# Dogs-API
This is a simple REST API with Node.js and Express.js with Typescript to demonstrate Best Practices, API validation, Logging, Error Handling, Testing, Use of DB initialization script, Use of Husky pre-commit hook, Containerization

## Run the System
We can easily run the whole project with only a single command:
```bash
docker-compose up
```
Docker will pull the MySQL and Node.js images (if our machine does not have them before).

Goto the URL:
http://localhost/

The services can be run in the background with the command:
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

### This command starts initializing the database and starts the server
```bash
yarn start
```

### This command runs the tests
```bash
yarn test
```
