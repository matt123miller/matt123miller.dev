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

## Docker

You can build the repo like so 

`docker build -t m11r/personal-site:latest .`

Then run it like so

`docker run -p 4321:80 m11r/personal-site:latest`

## TODO list

- 404 page
- content meta for sharing
- [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Host on my own VPS instead of vercel
