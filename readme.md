# Express Js with Objection js , Postgres Bolier Plate
  This Bolier plate uses express js framwork Postgres database and Objection js(ORM).


--------------------------------------------------------------------------------------


# Server Commands:

To Start Server

```bash
npm start
```

For Development uses nodemon

```bash
npm run dev

```

For Development uses test case

```bash
npm run test

```

For Development uses swagger autogen linux

```bash
npm run swagger

```

For Development uses swagger autogen windows

```bash
npm run swagger-windows

```

Debugging

```bash
npm run debug

```

---

# Database configuration

Here We Using knex.js for database connection configuration and migration

# migration

To run migrations

```bash
npx knex migrate:latest  --knexfile ./db/knexfile.js

```

To rollback migrations

```bash
npx knex migrate:rollback  --knexfile ./db/knexfile.js

```

To make migration

```bash
npx knex migrate:make 'file_name'  --knexfile ./db/knexfile.js
```

To up single migration

```bash
npx knex migrate:up 'file_name.js'  --knexfile ./db/knexfile.js
```

To down single migration

```bash
npx knex migrate:down 'file_name.js'  --knexfile ./db/knexfile.js
```

To list both completed and pending migrations

```bash
npx knex migrate:list  --knexfile ./db/knexfile.js
```

---

# seeder

To run seeder

```bash
npx knex seed:run  --knexfile ./db/knexfile.js

```

To run specific seeder

```bash
npx knex seed:run --specific="file_name.js"  --knexfile ./db/knexfile.js

```

To make seeder

```bash
npx knex seed:make 'file_name'  --knexfile ./db/knexfile.js
```

---

# References:

https://knexjs.org <br />
https://vincit.github.io/objection.js <br />
https://swagger.io/ <br />
https://www.chaijs.com/

---

# Commit Conventions:

## Quick examples

---

feat: new feature<br />
fix(scope): bug in scope<br />
feat!: breaking change / feat(scope)!: rework API<br />
chore(deps): update dependencies<br />

## Commit types

---

build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)<br />
ci: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)<br />
chore: Changes which doesn't change source code or tests e.g. changes to the build process, auxiliary tools, libraries<br />
docs: Documentation only changes<br />
feat: A new feature<br />
fix: A bug fix<br />
perf: A code change that improves performance<br />
refactor: A code change that neither fixes a bug nor adds a feature<br />
revert: Revert something<br />
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)<br />
test: Adding missing tests or correcting existing tests<br />

---

---

# Acknowledgement:

https://github.com/raydcode/roomie-api

---

<b>Happy Coding ✨ ! </b>
