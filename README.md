# create-react-app yarn workspace

This is a boilerplate project for a `create-react-app` application inside a `yarn` and `lerna` workspace.
There is a main `app` package that uses a webpack development server by means of the default CRA setup (via `react-scripts`).
Any additional packages can be transpiled and watched and they are available for import in the app.

## Setup

-   Clone this repository and remove the `.git` folder.

-   Run a search and replace for the project namespace. Search for `@namespace` and insert your own, e.g. `@foo`

-   Finally, run `yarn` or `yarn install` in the project root to install the dependencies and create the package symlinks.

_Note: Make sure to replace the occurances of `@namespace` **before** you run `yarn install`!_

## Scripts

**yarn start**

This starts both the `app` and `watch` scripts in parallel.

**yarn app**

This starts the development server for the `app` package.

**yarn watch**

This runs `yarn watch` in all packages that do have a `watch` script defined in their `package.json`.

**scripts/create-package.sh**

This creates a new package with some defaults, based on `scripts/templates/package`.
The package will automatically have a `build` script that transpiles `src/` to `lib/`, and a `watch` script that does the same but recompiles upon file change.
