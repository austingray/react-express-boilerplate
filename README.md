# React Express GraphQL Boilerplate
A boilerplate to jumpstart the creation of React + Express + GraphQL powered websites.

This is a major work in progress.

# Development
```
Is all that we see or seem
But a dream within a dream?
- Edgar Allen Poe
```

## Prerequisites
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/community-edition)

## Getting Started
- Install dependencies: `yarn`
- Start the server: `docker-compose up`

Now navigate your browser to `http://localhost:3000/` and you should see the rendered Homepage component.

- Watch changes to assets: `yarn run watch`

Any react file changes in `src/react/App/` will automatically compile. 

### Understanding: Docker
This project uses docker to run the app locally (which I am relatively new to still). The app is built using the `Dockerfile` in the root of this project, as well as the other images specified inside the `docker-compose.yml` file.

To start the app, run `docker-compose up`.

If you want to execute commands inside of your running docker environment, use the following:

```bash
docker-compose run web <your-command>
```

### Understanding: The Database
This project is setup using a Postgres database. It also uses Knex.js to interface with the database using javascript. Some things to remember:

- The database connection is configured in `.knex/knexfile.js`.
- Migration files exist in `.knex/migrations/`. (There is an init migration to get started). 
- Migrations can be run with `docker-compose run web yarn run db:migrate`

### Understanding: React
This project uses React for rendering its views. Those components can be found in `src/react`. Inside of that is an `App` dir that contains the React for this project. Inside of *that* is the two directories that matter:

- `Components` - The shared, reusable React components that will make up your UI, like buttons, headings, menus, etc.
- `Views` - The one-off React components that represent a single endpoint in the app, such as /home or /todos, etc, made up of many smaller react components.

### Understanding: GraphQL
This is being worked on currently, check back later for a detailed writeup.

### Understanding: Routing
This is being worked on currently, check back later for a detailed writeup.