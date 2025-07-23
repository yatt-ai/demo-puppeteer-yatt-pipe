module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  reporters: [
    'default',
    [
      'jest-junit',
      { classNameTemplate: 'e2e', titleTemplate: '{classname} {title}' },
    ],
  ],
  testMatch: ['**/tests/**/*.js', '**/?(*.)+(spec|test).js'],
}
