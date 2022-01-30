## simple-image-labeler

> Simple image labeler

[![](https://circleci.com/gh/kirillgroshkov/simple-image-labeler.svg?style=shield&circle-token=123)](https://circleci.com/gh/kirillgroshkov/simple-image-labeler)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Why

I couldn't find a dead-simple software that I can use to label a bulk of images.

I didn't need **annotation**, selection of part of the image or any other features.

I placed a bet (with myself) that I can create this software in 1 hour, which would be faster than
finding a suitable software on the internet and making it work with my needs.

I won. :)

# Quick start

- Put your images in `images/unlabeled` folder
- Create `.env` with `LABELS` property, e.g `LABELS=negative,positive,invalid`
- Start the server like `yarn serve` (or `npm run serve`)
- Open http://localhost:8080
- Click on the label button for each image one by one. Images are moved to a corresponding folder
  under `images/labeled/${labelName}`.
- No step 3! :)

# Prerequisites

- Node.js `>=16.10`
- `yarn` or `npm` to install dependencies

I can also publish a "bundled" version of it (made with `yarn bundle` via esbuild), which is a
single 9Mb js file with all dependencies bundled together (no node_modules installation needed).
Runnable as `node ./startServer.js`.
