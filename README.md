# React Express Boilerplate
A boilerplate to jumpstart the creation of React + Express powered websites.

### Notes

This project is going to become the new Reaxpress. I had a working title but I can't remember it. It may change names (Rex? Expression?). Anyway, the goal of this project is to make not just a boilerplate, but a complete application framework. In order to make this project actually useful, it should:

- Use Express
- Use React
- Use GraphQL
- Provide an easily upgradeable/extendable/overridable core
- Keep everything extremely modularized. For example, each get requests will exist in a single file (.jrex?, .jsrex?) with its corresponding react component. This needs to be reasoned out. I'm thinking all endpoints will exist in in the `routes` folder. Each top level request, for example `/test` will exist in its corresponding folder: `/routes/test` with an index.(.jsrex?) that has all pertinent data about the request. This means I will have to write a webpack plugin for compiling the react components from the source .jsrex file and customize eslint rules to get rid of warnings.
- A command line utility for managing routes
- Incorporate state management via a 3rd party library (redux?) or have its own custom state management
- Have custom routing (can use the old reaxpress as a baseline)
- Expect a Postgres database and use

The first step to doing this will be handling the new custom routing/file system

This is a major work in progress.

### Prerequisites
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/community-edition)

### Development
- Install dependencies: `yarn`
- Eslint is configured to use Airbnb style guide
- Watch changes to assets: `yarn run watch`

The folder structure:

`.knex/` - Keeps the knexfile that specifies the database connection. It also houses the database migrations. See http://knexjs.org/ for documentation.

`bin/` - Project scripts.

`public/` - All files that should be publicly accessible via the web server, including the built scripts/css.

`src/` - The source files for react, scss, and pre-optimized images.

`template/` - The template file (the site html) and the method that accepts a react component and returns the template html with the server rendered react component.

### Run
- This projects uses docker-compose: `docker-compose up`
- Build assets: `yarn run build`
- Run database migrations (if they exist): `docker-compose run web yarn run db:migrate`

### Routing
React routes are configured in the file `src/react/App/index`. This boilerplate provides a catchall Express route in `app.js`. TODO: add a `routes/` dir.
