module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'perf', 'build', 'ci', 'chore', 'merge', 'docs', 'feat', 'fix', 'test'],
    ],
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
  },
};
