module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'test/tsconfig.json',
        },
    },
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testEnvironment: 'node',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
    ],
    coveragePathIgnorePatterns: [
        'node_modules',
        'test',
        'lib',
    ],
};
