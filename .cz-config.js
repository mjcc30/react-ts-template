'use strict';

module.exports = {
  types: [
    { value: 'init', name: 'init:      Initial submission ' },
    { value: 'feat', name: 'feat:      Add new features ' },
    { value: 'fix', name: 'fix:       Repair bug' },
    { value: 'ui', name: 'ui:        to update UI' },
    { value: 'refactor', name: 'refactor:  Code refactoring ' },
    { value: 'release', name: 'release:   Release ' },
    { value: 'deploy', name: 'deploy:    Deploy ' },
    { value: 'docs', name: 'docs:      Modify the Documentation ' },
    { value: 'test', name: 'test:      Add and delete tests ' },
    { value: 'chore', name: 'chore:     Changing configuration files ' },
    { value: 'style', name: 'style:     Style changes do not affect logic ' },
    { value: 'revert', name: 'revert:    Revert to a commit ' },
    { value: 'add', name: 'add:       Add dependency ' },
    { value: 'minus', name: 'minus:     Version rollback ' },
    { value: 'del', name: 'del:       Delete the code / file ' },
    { value: 'perf', name: 'perf:     Change that improves performance' },
    { value: 'build', name: 'build:     Build' },
    { value: 'ci', name: 'ci:     Pipeline' }
  ],

  scopes: [
    { name: 'components' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'other' },
    { name: 'app' },
    { name: 'package' },
    { name: 'settings' },
    { name: 'controller' },
    { name: 'service' },
    { name: 'module' }
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows

  messages: {
    type: ' Selectionez un type :\n',
    //  If allowcustomscopes by true, Then use
    scope: ' Selectionez un scope：\n',
    customScope: ' Please enter a custom scope：',
    subject: ' Une courte description (max 100):\n',
    body: ' Une description plus détaillee .  Use "|" Line break :\n',
    breaking: 'Breaking Changes list :\n',
    footer: ' closed issues list . E.g.: #31, #34:\n',
    confirmCommit: ' Confirmez ?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'perf'],

  // limit subject length
  subjectLimit: 100
};
