const dotenv = require("dotenv");
dotenv.config({
  path: '.env.development'
})

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
    //essa configuração permite que o jest faça imports do node_modules e também configure o absolute path
    moduleDirectories: ['node_modules', '<rootDir>'],
    testTimeout: 60000,
});

module.exports = jestConfig;
