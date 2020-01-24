---
title: "You might not need Rollup for Bundling Libraries"
createdAt: 2018-10-25
---

For publishing one of my latest libraries I wanted to verify whether the [old saying](https://twitter.com/dalmaer/status/850837874060570624) of using Rollup for bundling libraries and webpack for bundling apps still holds true.

So I did a little experiment and discovered that **you might be much better off not bundling your libraries at all**.

## The assumptions

- We're using [create-react-app](https://github.com/facebook/create-react-app) with react-scripts 2.0.5 to scaffold an app that includes our bundled toy library. This means we will use webpack 4.19.1 for bundling this app.
- The toy library looks like this:

  **`index.js`**
  ```jsx
  /**/export {default as Small} from "./Small.js"
  /**/export {default as Big} from "./Big.js"
  ```

  **`Small.js`**
  ```jsx
  /**/export default function Small() {
    return null
  }
  ```

  **`Big.js`**
  ```jsx
  import * as lodash from "lodash"

  /**/export default function Big() {
    return Object.keys(lodash).join(",")
  }
  ```
- For this article **we're focussing on ES Modules as the output** for the toy library, since commonjs modules do not benefit from webpack's tree shaking by default. (There exists a [plugin](https://github.com/indutny/webpack-common-shake) though)

- The toy library is imported like this:

  ```jsx
  import {Small} from "toy-library"
  ```

So we're trying to test whether certain ways of publishing this library lead to omitting the `Big` Component from our final build.

## Baseline

If the `toy-library` is not included, the `create-react-app` main js bundle takes up:

**34.65 KB** gzipped

## Rollup #1

Since the toy library isn't using anything fancy we can keep our config very simple:

**rollup.config.js**

```js
/**/export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  external: ["lodash"], // dont include lodash's sources in the bundle
};
```

This results in a neatly bundled up file that looks like this:

```js
import * as lodash from 'lodash';

function Small() {
  return null;
}

function Big() {
  return Object.keys(lodash).join(",");
}

/**/export { Small, Big };
```

While nice and concise this doesn't help webpack from recognising that `import {Small} from "toy-library"` doesn't actually require to load the whole `lodash` library.

So in our app we'll end up with:

**58.32 KB** gzipped

## Babel Cli

Let's try something else then. Let's use the `@babel/cli` to prepare the toy-library for publishing. This build script is used in the `package.json`

```js
{
  "scripts": {
    "build": "babel --out-dir dist src"
  },
  "devDependencies": {
    "@babel/cli": "^7.1.2",
    "@babel/core": "^7.1.2"
  },
  ...
}
```

Since the toy library isn't using any fancy javascript features, babel isn't doing much. It ends up with putting three files into the `dist` folder that pretty much look like the original three files.

So let's look what the result looks like when importing the `Small` function via

```jsx
import {Small} from "toy-library"
```

**58.32 KB** gzipped

Okay. Apparently `lodash` still get's included by webpack into the main bundle.

After some digging around I found the reason why. The entry point of the `toy-library` imports both the `Big` and `Small` functions. And theoretically, importing `Big` could cause side effects.

By default webpack plays it safe and doesn't exclude any `import`.

So we need to tell webpack that the modules of the `toy-library` don't have any side effects.

Fortunately there's a very straight forward of doing so. We can add this line into the `toy-library`'s `package.json`:

```
"sideEffects": false
```

This [option](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) tells webpack that all our modules are side-effect-free and can be removed whilst treeshaking the final bundle.

And indeed it worked. After building the app, it's now just

**34.67 KB** gzipped

## Rollup #2

These days Rollup allows code splitting. It's still marked as experimental, but so far I haven't come across any issues.
This allows me to specify all entry points and Rollup will create the corresponding amount of bundles.

Here's the adapted **rollup.config.js**:

```js
/**/export default {
  input: ["src/index.js", "src/Small.js", "src/Big.js"],
  experimentalCodeSplitting: true,
  output: {
    dir: "dist",
    format: "esm",
  },
  external: ["lodash"],
};
```

And indeed, this results in an output that looks very similar to the one by the `babel-cli` above. But there is a fundamental difference behind the scenes.

 Babel takes a directory or files as input and transpiles each input file into a separate output file.

Rollup on the other hand takes the passed entry points (it doesn't accept dictionaries) and creates a bundle for each of them. So it's doing a lot more behind the scenes including making sure that these bundles are as small as possible via tree shaking.

So after making sure that `"sideEffects": false` is set in the `package.json`, the result is indeed what we were hoping for:

**34.67 KB** gzipped

## Conclusion

When offering a library to users that can rely on webpack's tree shaking capabilities, there's no need to use Rollup to decrease your library's impact on the final bundle size.

Quite the opposite: if users only want to use parts of your library, you are much more likely that babel's naïve one-to-one mapping of input to output files will yield better results. While Rollup offers emitting several output files via `experimentalCodeSplitting`, it's still up to the library author to define all entry points manually.

There's another benefit of not bundling your library before publishing it: users will be able to access small parts of your library. For example, they could import some `sub-package.js` via `import subPackage from "library/dist/sub-package"`

So I'd like to conclude by suggesting to use babel for creating ES Modules and commonjs outputs. Rollup can be used for creating treeshaken umd output.

You can check out my [bundle package](https://github.com/danielberndt/db-scripts/tree/master/packages/bundle) to get an idea of what a full configuration could look like.
