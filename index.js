module.exports = {
	parserPreset: 'conventional-changelog-conventionalcommits',
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'pascal-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
        "chore",
        "change",
        "improve",
        "fix",
        "update",
        "feat",
        "perf",
        "add",
        "docs",
        "remove",
        "rename"
      ],
		],
	},
	prompt: {
		questions: {
			type: {
				description: "Select the type of change that you're committing",
				enum: {
					change: {
						description: "Change something",
						title: "Changes",
						emoji: "🎈"
					},
					feat: {
						description: 'A new feature',
						title: 'Features',
						emoji: '✨',
					},
					fix: {
						description: 'A bug fix',
						title: 'Bug Fixes',
						emoji: '🐛',
					},
					docs: {
						description: 'Documentation only changes',
						title: 'Documentation',
						emoji: '📚',
					},
					improve: {
						description:
							'A code change that neither fixes a bug nor adds a feature',
						title: 'Code Refactoring',
						emoji: '📦',
					},
					perf: {
						description: 'A code change that improves performance',
						title: 'Performance Improvements',
						emoji: '🚀',
					},
					update: {
						description:
							'Change external dependencies (example scopes: gulp, broccoli, npm)',
						title: 'Builds',
						emoji: '🛠',
					},
					chore: {
						description: "Other changes that don't modify src or test files",
						title: 'Chores',
						emoji: '♻️',
					},
					revert: {
						description: "Reverts a previous commit",
						title: "Reverts",
						emoji: "🗑",
					},
					add: {
						description: "add something",
						title: "Addition",
						emoji: "🛒"
					},
					rename: {
						description: "Rename some files",
						title: "Rename",
						emoji: "✏"
					},
					remove: {
						description: "Remove some files or code",
						title: "Remove",
						emoji: "🚮"
					}
				},
			},
			scope: {
				description:
					'What is the scope of this change (e.g. component or file name)',
			},
			subject: {
				description:
					'Write a short, imperative tense description of the change',
			},
			body: {
				description: 'Provide a longer description of the change',
			},
		},
	},
};