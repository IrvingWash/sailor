module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    ignorePatterns: [
        "dist",
        "node_modules",
        "*.json",
    ],
    plugins: [
        "@stylistic",
        "@typescript-eslint",
        "optional-params",
        "import",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "newline-before-return": ["error"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/linebreak-style": ["error", "unix"],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/semi": ["error"],
        "@stylistic/eol-last": ["error"],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/comma-dangle": ["error", "always-multiline"],
        "@stylistic/no-trailing-spaces": ["error"],
        "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],
        "@stylistic/space-infix-ops": ["error"],
        "@stylistic/space-in-parens": ["error", "never"],
        "@stylistic/space-before-function-paren": ["error", "never"],
        "@stylistic/keyword-spacing": ["error"],
        "@stylistic/space-before-blocks": ["error"],
        "@stylistic/no-multi-spaces": ["error"],
        "optional-params/max-optional-params": ["error", 1],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/explicit-member-accessibility": ["error"],
        "@typescript-eslint/no-empty-interface": ["off"],
    },
};
