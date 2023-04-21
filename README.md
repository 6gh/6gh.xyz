# [6gh.xyz](https://6gh.xyz)

[![pages-build-deployment](https://github.com/6gh/6gh.xyz/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/6gh/6gh.xyz/actions/workflows/pages/pages-build-deployment)

This is the repository for my website. The entire source code can be found here for it.

## Credits

This site was built using [SvelteKit](https://kit.svelte.dev/), [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [change-theme](https://github.com/saadeghi/theme-change), and [Github Pages](https://pages.github.com/).

## Building

This project uses a combination of [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) and [gh-pages](https://www.npmjs.com/package/gh-pages) to create a static page version of the website, and publish it to Github Pages

If you want to build the website for yourself, simply run to build a static page version in the `build` folder.
```bash
npm run build
```

You can also preview the production build with `npm run preview`.
