# W01 learning activities and Question 1

Answer Yes after the activities, Render deployment, and post-deployment testing are actually complete. A local working application alone does not meet that condition.

Course sources: [W01 overview](https://byui-cse.github.io/cse340-ww-course/week01/index.html), [Node activity](https://byui-cse.github.io/cse340-ww-course/week01/prepare-1-node-overview.html), [EJS activity](https://byui-cse.github.io/cse340-ww-course/week01/prepare-2-ejs-templates.html).

The full vehicle storefront is the separate Assignment 1. This learning activity asks for a heading with the learner's name, a layout, and head, header, navigation and footer partials.

## Plan and evidence

| Step | Work | Status |
| --- | --- | --- |
| 1 | Check Node, Git, pnpm and VS Code; install course extensions | Complete: Node 22.23.2, Git 2.43.0, pnpm 10.20.0 and VS Code available; all six recommended course extensions installed. |
| 2 | Watch request/response preparation material and review Node references | Complete; learner confirmed review on 2026-11-01. |
| 3 | Build/test the simple Express application | Complete in sibling `../cse340-sample`; GET `/` returns `Welcome home!` (200), missing route returns 404. |
| 4 | Import/review official starter | Imported [340-starter](https://github.com/byui-wdd/340-starter) at `b0fa1e2b56516f1bee736a6786257ff0fbb624b6`; four placeholder files removed. |
| 5 | Install dependencies, configure EJS and layouts | Complete; pnpm installation and frozen-lockfile install pass. |
| 6 | Build partials, index route and named heading | Complete with `Hate-Uchiha`; rendered HTML checks pass. |
| 7 | Test locally | Complete: seven HTTP checks pass in development (5500) and production mode (10000); desktop/mobile browser screenshots inspected. |
| 8 | Publish the app to the learner's GitHub repository | Complete: [Proffvintage/cse340](https://github.com/Proffvintage/cse340), `main` branch. |
| 9 | Create Render account linked to GitHub | Complete; learner confirmed account creation and authorized the CLI. |
| 10 | Create a free PostgreSQL service | Complete: `cse340-db` is Available on the free plan in Frankfurt; database `cse340_0kyc`, user `cse340`; expires 2026-12-01. |
| 11 | Create free Node web service in the same region | Created [hate-uchiha-cse340](https://hate-uchiha-cse340.onrender.com), free Node service in Frankfurt with manual deployment. |
| 12 | Deploy updates and test the public app | Pending live Render URL; run `pnpm verify -- https://YOUR-SERVICE.onrender.com` and review in a browser. |

## File responsibilities and request flow

- `server.js`: configure Express/EJS, register middleware/routes, listen for requests.
- `routes/static.js`: serve `public` at the URL root, such as `/css/styles.css`.
- `views`: EJS templates and partials assembled into HTML on the server.
- `controllers`, `models`, `database`: later weeks' request orchestration and database access; empty locally for now.
- `.env`: local settings excluded from Git; `.env.sample` is a safe setup example.
- `package.json`: dependencies and commands; `pnpm-lock.yaml`: generated dependency lockfile.

Home: browser → Express GET `/` → `res.render("index", { title, studentName })` → EJS layout/partials → HTML.

CSS: browser → static middleware → `public/css/styles.css` → CSS. This request does not render an EJS view.

## Corrections to course examples

The starter's additional static mappings concatenate `__dirname + "public/css"`, giving an incorrect path under `routes`. A single `express.static(path.join(__dirname, "..", "public"))` serves all public assets, independently of the launch folder.

The EJS lesson's displayed require statement has a stray trailing period; the implementation omits it. Express configures static-file serving; EJS does not automatically serve `public`.

Adding an already tracked README to `.gitignore` does not untrack or delete it, contrary to the starter-files lesson's explanation. This project keeps a useful tracked README.

## Limits

The course's `My Account` link is implemented later and returns 404 at this stage. Vehicle navigation is temporary text, as in the activity.

W01 provisions a database and sets `DATABASE_URL`, but the home route does not query it. A successful home page cannot verify database connectivity.

Question 1 remains incomplete until pending steps are verified. No Canvas answer has been submitted.
