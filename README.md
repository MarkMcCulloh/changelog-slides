# The Wingly Changelog

## Getting Started

First create a `.env` file and add a `VITE_GH_TOKEN` key to it.
The value of this key should be a GitHub personal access token with read access to use names/emails.
After that, install via pnpm and run the dev server for `slides/latest.md`:

```
pnpm i
pnpm dev
```

## Adding Assets

To add a new asset, places the file in the public folder. Ideally, add a matching subdirectory for the version of the changelog you're working on.
To reference this asset, use "/" to refer to the `public` folder. i.e. `/v0.1.2/image.png` refers to `public/v0.1.2/image.png` when built.

## Shiki setup

This repo currently assumes you have the winglang repo checked out adjecent as well. In `setup/shiki.ts`, the path to the tm grammar for wing is a local path. Update this path if it is incorrect.
