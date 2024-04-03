module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/*.spec.ts'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/test(.+)': '<rootDir>/test/$1',
    '@/(.*)': '<rootDir>/src/$1',
  },
};
