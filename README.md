> Note: this package is mainly for my own use, but it might be useful if you use as needed  

# @mtripg6666tdr/commitlint-config
Sharable `commitlint` config enforcing some rules

## Gettings Started
1. Install `@commitlint/cli`
2. Install `@mtripg6666tdr/commitlint-config`
3. Configure commitlint config
4. Configure git commit hooks if you like

## Rules
> Seeing is believing.

### type-enum
```js
[
  "Chore",  // chore (e.g. buildline, workflow and so on)
  "Change", // change something
  "Improve",// code improvements (e.g. refactoring) without any logic changes
  "Fix",    // fix bugs
  "Update", // update dependencies
  "Feat",   // add new features
  "Perf",   // performance improvements
  "Add",    // add some stuff
  "Docs",   // update documentation
  "Remove", // remove something
  "Rename", // rename something
  "Revert", // revert previous commits
  "Bump",   // bump repository's version
],
```

### ignores
- If the commit message starts with `Merge`, skip all rules whatever it is.
- If the commit message includes `[wip]` (uppercase or lowercase does not matter), skip all rules whatever it is.

[See this for other rules](index.js)

## License
[MIT](LICENSE)
