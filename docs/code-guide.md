# W01 code and request flow

Course sources: [Express and Routing](https://byui-cse.github.io/cse340-ww-course-v2/week01/prepare-routing.html), [EJS Templates](https://byui-cse.github.io/cse340-ww-course-v2/week01/prepare-ejs.html), [Assignment](https://byui-cse.github.io/cse340-ww-course-v2/week01/assignment.html).

## Server

`package.json` sets `type: module`, enabling `import` and `export`. `server.js` imports Express, Node path utilities, the event helper and the course content.

`fileURLToPath(new URL('.', import.meta.url))` finds the project directory independently of the terminal's working directory. The camelCase name `projectDirectory` serves the same purpose as the lesson's `__dirname`.

`nodeEnvironment`, `port` and `host` read configuration from the environment. `nodemon.json` runs Node with `--env-file=.env` in development, while Render supplies its own environment. The `.env` file is ignored by Git.

`express.static(...)` serves `public` at the URL root. `/css/main.css` maps to `public/css/main.css`, and `/images/brightfuture-logo.png` maps to its public image file.

`app.set(...)` configures EJS and the `src/views` location before routes run. `app.locals.navigation` makes the four links available to every rendered partial.

Each route uses an async arrow function, creates a `title` variable, and calls `res.render` with a template name and its data. The templates contain no database queries. The existing PostgreSQL service is for later activities.

`await once(server, 'listening')` waits for startup before printing the confirmation. This uses async/await instead of a startup callback.

## Views and data

`src/data/site.js` exports constant arrays for the navigation, course-provided organizations, service projects and four categories. Descriptions on category cards are presentation copy; they do not establish additional assignment requirements.

Every view begins with `include('partials/header')` and ends with `include('partials/footer')`. The header owns the document start, HTML title, stylesheet link, skip link and navigation. The footer owns the copyright, shared links and document closing tags.

`<%= title %>` escapes the page title. All other dynamic text, URLs and attributes also use escaped output. `<%- %>` appears only on the two trusted partial includes so their HTML can render normally.

The active navigation link receives `aria-current="page"`. Anchor targets connect the home-page cards to the actual organization, project and category entries. The skip link focuses the main content for keyboard users.

## Request trace

Browser requests `/categories` → Express matches the route → the route passes `title` and `categories` to `categories.ejs` → EJS combines the page and shared partials → the server returns HTML → the browser requests the CSS and images through static middleware.

## Styles and verification

`main.css` uses shared color variables, CSS Grid and Flexbox. Media queries change grids and navigation at smaller widths. Visible focus outlines, a skip link, readable colors and active-page semantics support accessibility.

`npm run verify` checks actual page responses, required content, titles, navigation and anchor destinations, asset delivery, source-file exclusion and escaped title output. Browser checks additionally cover layout, image loading, contrast, keyboard access and navigation clicks.
