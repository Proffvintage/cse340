# CSE 340 — W01 learning activities

Express and EJS application based on the [official course starter](https://github.com/byui-wdd/340-starter). The home page displays Hate-Uchiha through a layout and four shared partials.

## Run locally

Use Node 22 and pnpm 10.20.0. If `.env` is missing, copy `.env.sample` to `.env`.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Open <http://localhost:5500>. In another terminal run `pnpm verify`. For production use `pnpm start`.

## Activities and deployment

- [W01 plan and course references](docs/w01-plan.md)
- [Render settings](docs/render-setup.md)
- [Verification evidence](docs/verification.md)

The separate Express exercise is in sibling folder `../cse340-sample`: run `pnpm install`, then `pnpm start`, and open <http://localhost:3000> to see `Welcome home!`.

The vehicle storefront, database queries and account functionality are developed in later activities and assignments.
