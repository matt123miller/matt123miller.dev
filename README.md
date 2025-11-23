# matt123miller.dev

This is my personal site, a content focused Astro site.

I'm trying to follow the commit guidelines detailed in the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) which mostly follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. My ammendments are the following:

- `content: <description>`

## 🚀 Project Structure

This project has the following structure and files.

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── content/
│   │   └── config.ts
│   │   └── blog/
│   │       └── A folder for each blog post
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Rest of the Astro starter readme

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## TODO list

- 404 page
- Content meta for sharing
- [Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Better vercel integration](https://vercel.com/docs/frameworks/astro)
- Replace `sharp` with vercel image service
