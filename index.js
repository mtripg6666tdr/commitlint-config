module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "body-leading-blank": [1, "always"],
    "footer-leading-blank": [1, "always"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "pascal-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
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
    ],
  },
  ignores: [
    commit => commit.startsWith("Merge") || commit.toUpperCase().includes("[WIP]")
  ],
};
