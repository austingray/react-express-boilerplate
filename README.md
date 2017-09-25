# React Express Boilerplate
A boilerplate to jumpstart the creation of React + Express powered websites.

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
