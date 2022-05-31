# Svelte+WASM Template

This is a template repo to bootstrap your Svelte+WASM project with some extra juicy stuff in it.

By default you have Typescript, TailwindCSS, ES-Lint (with the Airbnb preset), Prettier and Vite.

For the WASM part you get Rust and wasm-pack, all held together by [rsw](https://github.com/rwasm/vite-plugin-rsw). You will need to install them on your own. 

This is meant to be used with `pnpm` but you _should_ be able to use also `npm` or `yarn`.

## Get this template

You can just use the big green button "Use this template" or use `degit`

```bash
pnpx degit billy4479/svelte-wasm-template my-wasm-app
```

Once you have the files `cd` into the cloned directory and run

```bash
pnpm i

# To spin-up a dev server
pnpm run dev

# To rebuild the Rust code
pnpm run watch

# To build for production
pnpm run build
```

### VSCode

If you use VSCode make sure to add this line to you `settings.json`

```json
"eslint.lintTask.enable": true
```
