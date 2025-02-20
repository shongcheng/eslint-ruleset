airbnb-typescript: 220 rules added
ts-tc-rec: 97 rules added

## Ruleset Comparison

## `airbnb-typescript`

`eslint-config-airbnb`: `19.0.4`

`eslint-config-airbnb-base`: `15.0.0`

`eslint-config-airbnb-typescript`: `18.0.0`

```
extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
]
```

## `ts-tc-rec`

`typescript-eslint`: `8.24.1`

```
tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
)
```

## Table

|                                                                                                                     | airbnb-typescript | ts-tc-rec |
| ------------------------------------------------------------------------------------------------------------------- | ----------------- | --------- |
| [`array-bracket-spacing`💀](https://eslint.org/docs/latest/rules/array-bracket-spacing)                             |  ✔️               |           |
| [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)                               |  ✔️               |           |
| [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style)                                         |  ✔️               |           |
| [`arrow-parens`💀](https://eslint.org/docs/latest/rules/arrow-parens)                                               |  ✔️               |           |
| [`arrow-spacing`💀](https://eslint.org/docs/latest/rules/arrow-spacing)                                             |  ✔️               |           |
| [`@ts/await-thenable`](https://typescript-eslint.io/rules/await-thenable)                                           |                   |  ✔️       |
| [`@ts/ban-ts-comment`](https://typescript-eslint.io/rules/ban-ts-comment)                                           |                   |  ✔️       |
| [`block-scoped-var`](https://eslint.org/docs/latest/rules/block-scoped-var)                                         |  ✔️               |           |
| [`block-spacing`💀](https://eslint.org/docs/latest/rules/block-spacing)                                             |  ✔️               |           |
| `@ts/brace-style`                                                                                                   |  ✔️               |           |
| [`class-methods-use-this`](https://eslint.org/docs/latest/rules/class-methods-use-this)                             |  ✔️               |           |
| `@ts/comma-dangle`                                                                                                  |  ✔️               |           |
| `@ts/comma-spacing`                                                                                                 |  ✔️               |           |
| [`comma-style`💀](https://eslint.org/docs/latest/rules/comma-style)                                                 |  ✔️               |           |
| [`computed-property-spacing`💀](https://eslint.org/docs/latest/rules/computed-property-spacing)                     |  ✔️               |           |
| [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return)                                       |  ✔️               |           |
| [`curly`](https://eslint.org/docs/latest/rules/curly)                                                               |  ✔️               |           |
| [`default-case`](https://eslint.org/docs/latest/rules/default-case)                                                 |  ✔️               |           |
| [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last)                                       |  ✔️               |           |
| [`@ts/default-param-last`🧱](https://typescript-eslint.io/rules/default-param-last)                                 |  ✔️               |           |
| [`dot-location`💀](https://eslint.org/docs/latest/rules/dot-location)                                               |  ✔️               |           |
| [`@ts/dot-notation`🧱](https://typescript-eslint.io/rules/dot-notation)                                             |  ✔️               |           |
| [`eol-last`💀](https://eslint.org/docs/latest/rules/eol-last)                                                       |  ✔️               |           |
| [`eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq)                                                             |  ✔️               |           |
| [`for-direction`](https://eslint.org/docs/latest/rules/for-direction)                                               |  ✔️               |  ✔️       |
| `@ts/func-call-spacing`                                                                                             |  ✔️               |           |
| [`function-call-argument-newline`💀](https://eslint.org/docs/latest/rules/function-call-argument-newline)           |  ✔️               |           |
| [`function-paren-newline`💀](https://eslint.org/docs/latest/rules/function-paren-newline)                           |  ✔️               |           |
| [`generator-star-spacing`💀](https://eslint.org/docs/latest/rules/generator-star-spacing)                           |  ✔️               |           |
| [`global-require`💀](https://eslint.org/docs/latest/rules/global-require)                                           |  ✔️               |           |
| [`grouped-accessor-pairs`](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)                             |  ✔️               |           |
| [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in)                                                 |  ✔️               |           |
| [`implicit-arrow-linebreak`💀](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)                       |  ✔️               |           |
| `import/default`                                                                                                    |                   |  ✔️       |
| `import/export`                                                                                                     |  ✔️               |  ✔️       |
| `import/extensions`                                                                                                 |  ✔️               |           |
| `import/first`                                                                                                      |  ✔️               |           |
| `import/namespace`                                                                                                  |                   |  ✔️       |
| `import/newline-after-import`                                                                                       |  ✔️               |           |
| `import/no-absolute-path`                                                                                           |  ✔️               |           |
| `import/no-amd`                                                                                                     |  ✔️               |           |
| `import/no-cycle`                                                                                                   |  ✔️               |           |
| `import/no-duplicates`                                                                                              |  ✔️               |  ✔️       |
| `import/no-dynamic-require`                                                                                         |  ✔️               |           |
| `import/no-extraneous-dependencies`                                                                                 |  ✔️               |           |
| `import/no-import-module-exports`                                                                                   |  ✔️               |           |
| `import/no-mutable-exports`                                                                                         |  ✔️               |           |
| `import/no-named-as-default`                                                                                        |  ✔️               |  ✔️       |
| `import/no-named-as-default-member`                                                                                 |                   |  ✔️       |
| `import/no-named-default`                                                                                           |  ✔️               |           |
| `import/no-relative-packages`                                                                                       |  ✔️               |           |
| `import/no-self-import`                                                                                             |  ✔️               |           |
| `import/no-unresolved`                                                                                              |                   |  ✔️       |
| `import/no-useless-path-segments`                                                                                   |  ✔️               |           |
| `import/no-webpack-loader-syntax`                                                                                   |  ✔️               |           |
| `import/order`                                                                                                      |  ✔️               |           |
| `import/prefer-default-export`                                                                                      |  ✔️               |           |
| `@ts/indent`                                                                                                        |  ✔️               |           |
| [`key-spacing`💀](https://eslint.org/docs/latest/rules/key-spacing)                                                 |  ✔️               |           |
| `@ts/keyword-spacing`                                                                                               |  ✔️               |           |
| [`linebreak-style`💀](https://eslint.org/docs/latest/rules/linebreak-style)                                         |  ✔️               |           |
| [`lines-around-directive`💀](https://eslint.org/docs/latest/rules/lines-around-directive)                           |  ✔️               |           |
| `@ts/lines-between-class-members`                                                                                   |  ✔️               |           |
| [`max-classes-per-file`](https://eslint.org/docs/latest/rules/max-classes-per-file)                                 |  ✔️               |           |
| [`max-len`💀](https://eslint.org/docs/latest/rules/max-len)                                                         |  ✔️               |           |
| [`@ts/naming-convention`](https://typescript-eslint.io/rules/naming-convention)                                     |  ✔️               |           |
| [`new-cap`](https://eslint.org/docs/latest/rules/new-cap)                                                           |  ✔️               |           |
| [`new-parens`💀](https://eslint.org/docs/latest/rules/new-parens)                                                   |  ✔️               |           |
| [`newline-per-chained-call`💀](https://eslint.org/docs/latest/rules/newline-per-chained-call)                       |  ✔️               |           |
| [`@ts/no-array-constructor`🧱](https://typescript-eslint.io/rules/no-array-constructor)                             |  ✔️               |  ✔️       |
| [`@ts/no-array-delete`](https://typescript-eslint.io/rules/no-array-delete)                                         |                   |  ✔️       |
| [`no-async-promise-executor`](https://eslint.org/docs/latest/rules/no-async-promise-executor)                       |  ✔️               |  ✔️       |
| [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop)                                         |  ✔️               |           |
| [`@ts/no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string)                                     |                   |  ✔️       |
| [`no-bitwise`](https://eslint.org/docs/latest/rules/no-bitwise)                                                     |  ✔️               |           |
| [`no-buffer-constructor`💀](https://eslint.org/docs/latest/rules/no-buffer-constructor)                             |  ✔️               |           |
| [`no-caller`](https://eslint.org/docs/latest/rules/no-caller)                                                       |  ✔️               |           |
| [`no-case-declarations`](https://eslint.org/docs/latest/rules/no-case-declarations)                                 |  ✔️               |  ✔️       |
| [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign)                                           |  ✔️               |           |
| [`no-compare-neg-zero`](https://eslint.org/docs/latest/rules/no-compare-neg-zero)                                   |  ✔️               |  ✔️       |
| [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)                                             |  ✔️               |  ✔️       |
| [`no-confusing-arrow`💀](https://eslint.org/docs/latest/rules/no-confusing-arrow)                                   |  ✔️               |           |
| [`no-constant-binary-expression`](https://eslint.org/docs/latest/rules/no-constant-binary-expression)               |                   |  ✔️       |
| [`no-constant-condition`](https://eslint.org/docs/latest/rules/no-constant-condition)                               |                   |  ✔️       |
| [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return)                               |  ✔️               |           |
| [`no-continue`](https://eslint.org/docs/latest/rules/no-continue)                                                   |  ✔️               |           |
| [`no-control-regex`](https://eslint.org/docs/latest/rules/no-control-regex)                                         |  ✔️               |  ✔️       |
| [`no-debugger`](https://eslint.org/docs/latest/rules/no-debugger)                                                   |  ✔️               |  ✔️       |
| [`no-delete-var`](https://eslint.org/docs/latest/rules/no-delete-var)                                               |  ✔️               |  ✔️       |
| [`@ts/no-dupe-class-members`🧱](https://typescript-eslint.io/rules/no-dupe-class-members)                           |  ✔️               |           |
| [`no-dupe-else-if`](https://eslint.org/docs/latest/rules/no-dupe-else-if)                                           |  ✔️               |  ✔️       |
| [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case)                                       |  ✔️               |  ✔️       |
| [`@ts/no-duplicate-enum-values`](https://typescript-eslint.io/rules/no-duplicate-enum-values)                       |                   |  ✔️       |
| [`@ts/no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents)           |                   |  ✔️       |
| [`no-else-return`](https://eslint.org/docs/latest/rules/no-else-return)                                             |  ✔️               |           |
| [`no-empty`](https://eslint.org/docs/latest/rules/no-empty)                                                         |  ✔️               |  ✔️       |
| [`no-empty-character-class`](https://eslint.org/docs/latest/rules/no-empty-character-class)                         |  ✔️               |  ✔️       |
| [`@ts/no-empty-function`🧱](https://typescript-eslint.io/rules/no-empty-function)                                   |  ✔️               |           |
| [`@ts/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type)                               |                   |  ✔️       |
| [`no-empty-pattern`](https://eslint.org/docs/latest/rules/no-empty-pattern)                                         |  ✔️               |  ✔️       |
| [`no-empty-static-block`](https://eslint.org/docs/latest/rules/no-empty-static-block)                               |                   |  ✔️       |
| [`no-eval`](https://eslint.org/docs/latest/rules/no-eval)                                                           |  ✔️               |           |
| [`no-ex-assign`](https://eslint.org/docs/latest/rules/no-ex-assign)                                                 |  ✔️               |  ✔️       |
| [`@ts/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any)                                         |                   |  ✔️       |
| [`no-extend-native`](https://eslint.org/docs/latest/rules/no-extend-native)                                         |  ✔️               |           |
| [`no-extra-bind`](https://eslint.org/docs/latest/rules/no-extra-bind)                                               |  ✔️               |           |
| [`no-extra-boolean-cast`](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)                               |  ✔️               |  ✔️       |
| [`no-extra-label`](https://eslint.org/docs/latest/rules/no-extra-label)                                             |  ✔️               |           |
| [`@ts/no-extra-non-null-assertion`](https://typescript-eslint.io/rules/no-extra-non-null-assertion)                 |                   |  ✔️       |
| `@ts/no-extra-semi`                                                                                                 |  ✔️               |           |
| [`no-fallthrough`](https://eslint.org/docs/latest/rules/no-fallthrough)                                             |  ✔️               |  ✔️       |
| [`no-floating-decimal`💀](https://eslint.org/docs/latest/rules/no-floating-decimal)                                 |  ✔️               |           |
| [`@ts/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)                               |                   |  ✔️       |
| [`@ts/no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array)                                         |                   |  ✔️       |
| [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)                                         |  ✔️               |  ✔️       |
| [`@ts/no-implied-eval`🧱](https://typescript-eslint.io/rules/no-implied-eval)                                       |  ✔️               |  ✔️       |
| [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations)                               |  ✔️               |           |
| [`no-invalid-regexp`](https://eslint.org/docs/latest/rules/no-invalid-regexp)                                       |  ✔️               |  ✔️       |
| [`no-irregular-whitespace`](https://eslint.org/docs/latest/rules/no-irregular-whitespace)                           |  ✔️               |  ✔️       |
| [`no-iterator`](https://eslint.org/docs/latest/rules/no-iterator)                                                   |  ✔️               |           |
| [`no-label-var`](https://eslint.org/docs/latest/rules/no-label-var)                                                 |  ✔️               |           |
| [`no-labels`](https://eslint.org/docs/latest/rules/no-labels)                                                       |  ✔️               |           |
| [`no-lone-blocks`](https://eslint.org/docs/latest/rules/no-lone-blocks)                                             |  ✔️               |           |
| [`no-lonely-if`](https://eslint.org/docs/latest/rules/no-lonely-if)                                                 |  ✔️               |           |
| [`@ts/no-loop-func`🧱](https://typescript-eslint.io/rules/no-loop-func)                                             |  ✔️               |           |
| [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)                                 |                   |  ✔️       |
| [`@ts/no-loss-of-precision`💀🧱](https://typescript-eslint.io/rules/no-loss-of-precision)                           |  ✔️               |           |
| [`no-misleading-character-class`](https://eslint.org/docs/latest/rules/no-misleading-character-class)               |  ✔️               |  ✔️       |
| [`@ts/no-misused-new`](https://typescript-eslint.io/rules/no-misused-new)                                           |                   |  ✔️       |
| [`@ts/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)                                 |                   |  ✔️       |
| [`no-mixed-operators`💀](https://eslint.org/docs/latest/rules/no-mixed-operators)                                   |  ✔️               |           |
| [`no-mixed-spaces-and-tabs`💀](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)                       |  ✔️               |           |
| [`no-multi-assign`](https://eslint.org/docs/latest/rules/no-multi-assign)                                           |  ✔️               |           |
| [`no-multi-spaces`💀](https://eslint.org/docs/latest/rules/no-multi-spaces)                                         |  ✔️               |           |
| [`no-multi-str`](https://eslint.org/docs/latest/rules/no-multi-str)                                                 |  ✔️               |           |
| [`no-multiple-empty-lines`💀](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)                         |  ✔️               |           |
| [`@ts/no-namespace`](https://typescript-eslint.io/rules/no-namespace)                                               |                   |  ✔️       |
| [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary)                                       |  ✔️               |           |
| [`no-new`](https://eslint.org/docs/latest/rules/no-new)                                                             |  ✔️               |           |
| [`no-new-object`💀](https://eslint.org/docs/latest/rules/no-new-object)                                             |  ✔️               |           |
| [`no-new-require`💀](https://eslint.org/docs/latest/rules/no-new-require)                                           |  ✔️               |           |
| [`no-new-wrappers`](https://eslint.org/docs/latest/rules/no-new-wrappers)                                           |  ✔️               |           |
| [`@ts/no-non-null-asserted-optional-chain`](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) |                   |  ✔️       |
| [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)                     |  ✔️               |  ✔️       |
| [`no-octal`](https://eslint.org/docs/latest/rules/no-octal)                                                         |  ✔️               |  ✔️       |
| [`no-octal-escape`](https://eslint.org/docs/latest/rules/no-octal-escape)                                           |  ✔️               |           |
| [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign)                                       |  ✔️               |           |
| [`no-path-concat`💀](https://eslint.org/docs/latest/rules/no-path-concat)                                           |  ✔️               |           |
| [`no-plusplus`](https://eslint.org/docs/latest/rules/no-plusplus)                                                   |  ✔️               |           |
| [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return)                     |  ✔️               |           |
| [`no-proto`](https://eslint.org/docs/latest/rules/no-proto)                                                         |  ✔️               |           |
| [`no-prototype-builtins`](https://eslint.org/docs/latest/rules/no-prototype-builtins)                               |  ✔️               |  ✔️       |
| [`@ts/no-redeclare`🧱](https://typescript-eslint.io/rules/no-redeclare)                                             |  ✔️               |           |
| [`@ts/no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents)           |                   |  ✔️       |
| [`no-regex-spaces`](https://eslint.org/docs/latest/rules/no-regex-spaces)                                           |  ✔️               |  ✔️       |
| [`@ts/no-require-imports`](https://typescript-eslint.io/rules/no-require-imports)                                   |                   |  ✔️       |
| [`no-restricted-exports`](https://eslint.org/docs/latest/rules/no-restricted-exports)                               |  ✔️               |           |
| [`no-restricted-globals`](https://eslint.org/docs/latest/rules/no-restricted-globals)                               |  ✔️               |           |
| [`no-restricted-properties`](https://eslint.org/docs/latest/rules/no-restricted-properties)                         |  ✔️               |           |
| [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax)                                 |  ✔️               |           |
| [`no-return-assign`](https://eslint.org/docs/latest/rules/no-return-assign)                                         |  ✔️               |           |
| [`no-script-url`](https://eslint.org/docs/latest/rules/no-script-url)                                               |  ✔️               |           |
| [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign)                                             |  ✔️               |  ✔️       |
| [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare)                                           |  ✔️               |           |
| [`no-sequences`](https://eslint.org/docs/latest/rules/no-sequences)                                                 |  ✔️               |           |
| [`@ts/no-shadow`🧱](https://typescript-eslint.io/rules/no-shadow)                                                   |  ✔️               |           |
| [`no-shadow-restricted-names`](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)                     |  ✔️               |  ✔️       |
| [`no-spaced-func`💀](https://eslint.org/docs/latest/rules/no-spaced-func)                                           |  ✔️               |           |
| [`no-sparse-arrays`](https://eslint.org/docs/latest/rules/no-sparse-arrays)                                         |  ✔️               |  ✔️       |
| [`no-tabs`💀](https://eslint.org/docs/latest/rules/no-tabs)                                                         |  ✔️               |           |
| [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string)                   |  ✔️               |           |
| [`@ts/no-this-alias`](https://typescript-eslint.io/rules/no-this-alias)                                             |                   |  ✔️       |
| `@ts/no-throw-literal`                                                                                              |  ✔️               |           |
| [`no-trailing-spaces`💀](https://eslint.org/docs/latest/rules/no-trailing-spaces)                                   |  ✔️               |           |
| [`no-undef-init`](https://eslint.org/docs/latest/rules/no-undef-init)                                               |  ✔️               |           |
| [`no-underscore-dangle`](https://eslint.org/docs/latest/rules/no-underscore-dangle)                                 |  ✔️               |           |
| [`no-unexpected-multiline`](https://eslint.org/docs/latest/rules/no-unexpected-multiline)                           |  ✔️               |  ✔️       |
| [`@ts/no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)             |                   |  ✔️       |
| [`@ts/no-unnecessary-type-constraint`](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)           |                   |  ✔️       |
| [`no-unneeded-ternary`](https://eslint.org/docs/latest/rules/no-unneeded-ternary)                                   |  ✔️               |           |
| [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop)                                   |  ✔️               |           |
| [`@ts/no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument)                                   |                   |  ✔️       |
| [`@ts/no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment)                               |                   |  ✔️       |
| [`@ts/no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call)                                           |                   |  ✔️       |
| [`@ts/no-unsafe-declaration-merging`](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)             |                   |  ✔️       |
| [`@ts/no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)                     |                   |  ✔️       |
| [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally)                                       |  ✔️               |  ✔️       |
| [`@ts/no-unsafe-function-type`](https://typescript-eslint.io/rules/no-unsafe-function-type)                         |                   |  ✔️       |
| [`@ts/no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access)                         |                   |  ✔️       |
| [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)                   |  ✔️               |  ✔️       |
| [`@ts/no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return)                                       |                   |  ✔️       |
| [`@ts/no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus)                             |                   |  ✔️       |
| [`@ts/no-unused-expressions`🧱](https://typescript-eslint.io/rules/no-unused-expressions)                           |  ✔️               |  ✔️       |
| [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels)                                         |  ✔️               |  ✔️       |
| [`no-unused-private-class-members`](https://eslint.org/docs/latest/rules/no-unused-private-class-members)           |                   |  ✔️       |
| [`@ts/no-unused-vars`🧱](https://typescript-eslint.io/rules/no-unused-vars)                                         |  ✔️               |  ✔️       |
| [`@ts/no-use-before-define`🧱](https://typescript-eslint.io/rules/no-use-before-define)                             |  ✔️               |           |
| [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)                         |  ✔️               |  ✔️       |
| [`no-useless-catch`](https://eslint.org/docs/latest/rules/no-useless-catch)                                         |  ✔️               |  ✔️       |
| [`no-useless-computed-key`](https://eslint.org/docs/latest/rules/no-useless-computed-key)                           |  ✔️               |           |
| [`no-useless-concat`](https://eslint.org/docs/latest/rules/no-useless-concat)                                       |  ✔️               |           |
| [`@ts/no-useless-constructor`🧱](https://typescript-eslint.io/rules/no-useless-constructor)                         |  ✔️               |           |
| [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape)                                       |  ✔️               |  ✔️       |
| [`no-useless-rename`](https://eslint.org/docs/latest/rules/no-useless-rename)                                       |  ✔️               |           |
| [`no-useless-return`](https://eslint.org/docs/latest/rules/no-useless-return)                                       |  ✔️               |           |
| [`no-var`](https://eslint.org/docs/latest/rules/no-var)                                                             |  ✔️               |  ✔️       |
| [`no-void`](https://eslint.org/docs/latest/rules/no-void)                                                           |  ✔️               |           |
| [`no-whitespace-before-property`💀](https://eslint.org/docs/latest/rules/no-whitespace-before-property)             |  ✔️               |           |
| [`no-with`](https://eslint.org/docs/latest/rules/no-with)                                                           |  ✔️               |  ✔️       |
| [`@ts/no-wrapper-object-types`](https://typescript-eslint.io/rules/no-wrapper-object-types)                         |                   |  ✔️       |
| [`nonblock-statement-body-position`💀](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)       |  ✔️               |           |
| [`object-curly-newline`💀](https://eslint.org/docs/latest/rules/object-curly-newline)                               |  ✔️               |           |
| `@ts/object-curly-spacing`                                                                                          |  ✔️               |           |
| [`object-property-newline`💀](https://eslint.org/docs/latest/rules/object-property-newline)                         |  ✔️               |           |
| [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)                                         |  ✔️               |           |
| [`one-var`](https://eslint.org/docs/latest/rules/one-var)                                                           |  ✔️               |           |
| [`one-var-declaration-per-line`💀](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)               |  ✔️               |           |
| [`@ts/only-throw-error`🧱](https://typescript-eslint.io/rules/only-throw-error)                                     |                   |  ✔️       |
| [`operator-assignment`](https://eslint.org/docs/latest/rules/operator-assignment)                                   |  ✔️               |           |
| [`operator-linebreak`💀](https://eslint.org/docs/latest/rules/operator-linebreak)                                   |  ✔️               |           |
| [`padded-blocks`💀](https://eslint.org/docs/latest/rules/padded-blocks)                                             |  ✔️               |           |
| [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback)                               |  ✔️               |           |
| [`@ts/prefer-as-const`](https://typescript-eslint.io/rules/prefer-as-const)                                         |                   |  ✔️       |
| [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const)                                                 |  ✔️               |  ✔️       |
| [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)                                 |  ✔️               |           |
| [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)             |  ✔️               |           |
| [`@ts/prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword)                       |                   |  ✔️       |
| [`prefer-numeric-literals`](https://eslint.org/docs/latest/rules/prefer-numeric-literals)                           |  ✔️               |           |
| [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread)                                 |  ✔️               |           |
| [`@ts/prefer-promise-reject-errors`🧱](https://typescript-eslint.io/rules/prefer-promise-reject-errors)             |                   |  ✔️       |
| [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)                 |  ✔️               |           |
| [`prefer-regex-literals`](https://eslint.org/docs/latest/rules/prefer-regex-literals)                               |  ✔️               |           |
| [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params)                                     |  ✔️               |  ✔️       |
| [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread)                                               |  ✔️               |  ✔️       |
| [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template)                                           |  ✔️               |           |
| [`quote-props`💀](https://eslint.org/docs/latest/rules/quote-props)                                                 |  ✔️               |           |
| `@ts/quotes`                                                                                                        |  ✔️               |           |
| [`radix`](https://eslint.org/docs/latest/rules/radix)                                                               |  ✔️               |           |
| `react-hooks/exhaustive-deps`                                                                                       |  ✔️               |           |
| `react-hooks/rules-of-hooks`                                                                                        |  ✔️               |           |
| [`@ts/require-await`🧱](https://typescript-eslint.io/rules/require-await)                                           |                   |  ✔️       |
| [`require-yield`](https://eslint.org/docs/latest/rules/require-yield)                                               |  ✔️               |  ✔️       |
| [`rest-spread-spacing`💀](https://eslint.org/docs/latest/rules/rest-spread-spacing)                                 |  ✔️               |           |
| [`@ts/restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands)                           |                   |  ✔️       |
| [`@ts/restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions)             |                   |  ✔️       |
| [`@ts/return-await`](https://typescript-eslint.io/rules/return-await)                                               |  ✔️               |           |
| `@ts/semi`                                                                                                          |  ✔️               |           |
| [`semi-spacing`💀](https://eslint.org/docs/latest/rules/semi-spacing)                                               |  ✔️               |           |
| [`semi-style`💀](https://eslint.org/docs/latest/rules/semi-style)                                                   |  ✔️               |           |
| `@ts/space-before-blocks`                                                                                           |  ✔️               |           |
| `@ts/space-before-function-paren`                                                                                   |  ✔️               |           |
| [`space-in-parens`💀](https://eslint.org/docs/latest/rules/space-in-parens)                                         |  ✔️               |           |
| `@ts/space-infix-ops`                                                                                               |  ✔️               |           |
| [`space-unary-ops`💀](https://eslint.org/docs/latest/rules/space-unary-ops)                                         |  ✔️               |           |
| [`spaced-comment`💀](https://eslint.org/docs/latest/rules/spaced-comment)                                           |  ✔️               |           |
| [`strict`](https://eslint.org/docs/latest/rules/strict)                                                             |  ✔️               |           |
| [`switch-colon-spacing`💀](https://eslint.org/docs/latest/rules/switch-colon-spacing)                               |  ✔️               |           |
| [`symbol-description`](https://eslint.org/docs/latest/rules/symbol-description)                                     |  ✔️               |           |
| [`template-curly-spacing`💀](https://eslint.org/docs/latest/rules/template-curly-spacing)                           |  ✔️               |           |
| [`template-tag-spacing`💀](https://eslint.org/docs/latest/rules/template-tag-spacing)                               |  ✔️               |           |
| [`@ts/triple-slash-reference`](https://typescript-eslint.io/rules/triple-slash-reference)                           |                   |  ✔️       |
| [`@ts/unbound-method`](https://typescript-eslint.io/rules/unbound-method)                                           |                   |  ✔️       |
| [`unicode-bom`](https://eslint.org/docs/latest/rules/unicode-bom)                                                   |  ✔️               |           |
| [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan)                                                       |  ✔️               |  ✔️       |
| [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof)                                                 |                   |  ✔️       |
| [`vars-on-top`](https://eslint.org/docs/latest/rules/vars-on-top)                                                   |  ✔️               |           |
| [`wrap-iife`💀](https://eslint.org/docs/latest/rules/wrap-iife)                                                     |  ✔️               |           |
| [`yield-star-spacing`💀](https://eslint.org/docs/latest/rules/yield-star-spacing)                                   |  ✔️               |           |
| [`yoda`](https://eslint.org/docs/latest/rules/yoda)                                                                 |  ✔️               |           |
