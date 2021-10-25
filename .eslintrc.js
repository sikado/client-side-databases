module.exports = {
    "root": true,
    "ignorePatterns": [
        "projects/**/*"
    ],
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": [
                    "tsconfig.json",
                    "e2e/tsconfig.json"
                ],
                "createDefaultProgram": true
            },
            "extends": [
                "plugin:@angular-eslint/ng-cli-compat",
                "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
                "plugin:@angular-eslint/template/process-inline-templates"
            ],
            "rules": {
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": "element",
                        "prefix": "app",
                        "style": "kebab-case"
                    }
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "type": "attribute",
                        "prefix": "app",
                        "style": "camelCase"
                    }
                ],
                "@angular-eslint/no-output-native": 0,
                // TODO re-enable these rules and fix all lint errors
                "prefer-arrow/prefer-arrow-functions": 0,
                "@typescript-eslint/member-ordering": 0
            }
        },
        {
            "files": [
                "*.html"
            ],
            "extends": [
                "plugin:@angular-eslint/template/recommended"
            ],
            "rules": {}
        }
    ]
}
