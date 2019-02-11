# @namespace/eslint-config-eslint

This is the eslint configuration for all workspace packages including the `app` package.
It is used by prettier as well and allows us to have a consistent auto-formatted code style across the entire codebase.

The reason for the "weird" package name is the resolving mechanism emplyed by `eslint`.
Using the name `@namespace/eslint-config-eslint`, we can reference it using `@namespace/eslint` in the `package.json` of any other workspace package, which is consistent with how we use `@namespace/babel`:

```
  ...
  "eslintConfig": {
    "extends": "@namespace/eslint"
  },
  ...

```
