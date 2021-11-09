module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat', // Changes about addition or removal of a feature.
        'fix', // Bug fixing, followed by the issue (not what you do to fix that bug)
        'docs', // Update documentation (README.md)
        'chore', // Installing new dependencies, or bumping deps
        'style', // Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
        'refactor', // Changes in code, same output, but different approach
        'ci', // Update github workflows, husky
        'test', // Update testing suite, cypress files
        'revert', // when reverting commits
        'perf', // Fixing something regarding performance (deriving state, using memo, callback)
        'vercel', // Blank commit to trigger vercel deployment
      ],
    ],
  },
};
