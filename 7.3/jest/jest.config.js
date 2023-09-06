module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/jest.config.js",
    "!**/node_modules/**",
    "!**/coverage/**"
  ],
  coverageThreshold: {
    "branches": 100,
    "functions": 100,
    "lines": 100
  }
};
