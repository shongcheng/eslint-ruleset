airbnb-ts: 220 rules added
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

|                                                                                                                     | airbnb-ts | ts-tc-rec | ext    | rec    | strict    | style    | Desc                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | --------- | --------- | ------ | ------ | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [`array-bracket-spacing`💀](https://eslint.org/docs/latest/rules/array-bracket-spacing)                             |  ✔️       |           |        |        |           |          | Enforce consistent spacing inside array brackets

line 1
line 2
                                                               |
| [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)                               |  ✔️       |           |        |        |           |          | Enforce `return` statements in callbacks of array methods

                                                                    |
| [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style)                                         |  ✔️       |           |        |        |           |          | Require braces around arrow function bodies

                                                                                  |
| [`arrow-parens`💀](https://eslint.org/docs/latest/rules/arrow-parens)                                               |  ✔️       |           |        |        |           |          | Require parentheses around arrow function arguments

                                                                          |
| [`arrow-spacing`💀](https://eslint.org/docs/latest/rules/arrow-spacing)                                             |  ✔️       |           |        |        |           |          | Enforce consistent spacing before and after the arrow in arrow functions

                                                     |
| [`@ts/await-thenable`](https://typescript-eslint.io/rules/await-thenable)                                           |           |  ✔️       |        | 🟩 rec |           |          | Disallow awaiting a value that is not a Thenable

                                                                             |
| [`@ts/ban-ts-comment`](https://typescript-eslint.io/rules/ban-ts-comment)                                           |           |  ✔️       |        |        |           |          | Disallow `@ts-<directive>` comments or require descriptions after directives

                                                 |
| [`block-scoped-var`](https://eslint.org/docs/latest/rules/block-scoped-var)                                         |  ✔️       |           |        |        |           |          | Enforce the use of variables within the scope they are defined

                                                               |
| [`block-spacing`💀](https://eslint.org/docs/latest/rules/block-spacing)                                             |  ✔️       |           |        |        |           |          | Disallow or enforce spaces inside of blocks after opening block and before closing block

                                     |
| `@ts/brace-style`                                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`class-methods-use-this`](https://eslint.org/docs/latest/rules/class-methods-use-this)                             |  ✔️       |           |        |        |           |          | Enforce that class methods utilize `this`

                                                                                    |
| `@ts/comma-dangle`                                                                                                  |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `@ts/comma-spacing`                                                                                                 |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`comma-style`💀](https://eslint.org/docs/latest/rules/comma-style)                                                 |  ✔️       |           |        |        |           |          | Enforce consistent comma style

                                                                                               |
| [`computed-property-spacing`💀](https://eslint.org/docs/latest/rules/computed-property-spacing)                     |  ✔️       |           |        |        |           |          | Enforce consistent spacing inside computed property brackets

                                                                 |
| [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return)                                       |  ✔️       |           |        |        |           |          | Require `return` statements to either always or never specify values

                                                         |
| [`curly`](https://eslint.org/docs/latest/rules/curly)                                                               |  ✔️       |           |        |        |           |          | Enforce consistent brace style for all control statements

                                                                    |
| [`default-case`](https://eslint.org/docs/latest/rules/default-case)                                                 |  ✔️       |           |        |        |           |          | Require `default` cases in `switch` statements

                                                                               |
| [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last)                                       |  ✔️       |           |        |        |           |          | Enforce `default` clauses in `switch` statements to be last

                                                                  |
| [`@ts/default-param-last`🧱](https://typescript-eslint.io/rules/default-param-last)                                 |  ✔️       |           | 🧱 ext |        |           |          | Enforce default parameters to be last

                                                                                        |
| [`dot-location`💀](https://eslint.org/docs/latest/rules/dot-location)                                               |  ✔️       |           |        |        |           |          | Enforce consistent newlines before and after dots

                                                                            |
| [`@ts/dot-notation`🧱](https://typescript-eslint.io/rules/dot-notation)                                             |  ✔️       |           | 🧱 ext |        |           | 🔸 style | Enforce dot notation whenever possible

                                                                                       |
| [`eol-last`💀](https://eslint.org/docs/latest/rules/eol-last)                                                       |  ✔️       |           |        |        |           |          | Require or disallow newline at the end of files

                                                                              |
| [`eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq)                                                             |  ✔️       |           |        |        |           |          | Require the use of `===` and `!==`

                                                                                           |
| [`for-direction`](https://eslint.org/docs/latest/rules/for-direction)                                               |  ✔️       |  ✔️       |        |        |           |          | Enforce `for` loop update clause moving the counter in the right direction

                                                   |
| `@ts/func-call-spacing`                                                                                             |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`function-call-argument-newline`💀](https://eslint.org/docs/latest/rules/function-call-argument-newline)           |  ✔️       |           |        |        |           |          | Enforce line breaks between arguments of a function call

                                                                     |
| [`function-paren-newline`💀](https://eslint.org/docs/latest/rules/function-paren-newline)                           |  ✔️       |           |        |        |           |          | Enforce consistent line breaks inside function parentheses

                                                                   |
| [`generator-star-spacing`💀](https://eslint.org/docs/latest/rules/generator-star-spacing)                           |  ✔️       |           |        |        |           |          | Enforce consistent spacing around `*` operators in generator functions

                                                       |
| [`global-require`💀](https://eslint.org/docs/latest/rules/global-require)                                           |  ✔️       |           |        |        |           |          | Require `require()` calls to be placed at top-level module scope

                                                             |
| [`grouped-accessor-pairs`](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)                             |  ✔️       |           |        |        |           |          | Require grouped accessor pairs in object literals and classes

                                                                |
| [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in)                                                 |  ✔️       |           |        |        |           |          | Require `for-in` loops to include an `if` statement

                                                                          |
| [`implicit-arrow-linebreak`💀](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)                       |  ✔️       |           |        |        |           |          | Enforce the location of arrow function bodies

                                                                                |
| `import/default`                                                                                                    |           |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/export`                                                                                                     |  ✔️       |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/extensions`                                                                                                 |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/first`                                                                                                      |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/namespace`                                                                                                  |           |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/newline-after-import`                                                                                       |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-absolute-path`                                                                                           |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-amd`                                                                                                     |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-cycle`                                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-duplicates`                                                                                              |  ✔️       |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/no-dynamic-require`                                                                                         |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-extraneous-dependencies`                                                                                 |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-import-module-exports`                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-mutable-exports`                                                                                         |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-named-as-default`                                                                                        |  ✔️       |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/no-named-as-default-member`                                                                                 |           |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/no-named-default`                                                                                           |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-relative-packages`                                                                                       |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-self-import`                                                                                             |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-unresolved`                                                                                              |           |  ✔️       |        |        |           |          | undefined

                                                                                                                    |
| `import/no-useless-path-segments`                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/no-webpack-loader-syntax`                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/order`                                                                                                      |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `import/prefer-default-export`                                                                                      |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `@ts/indent`                                                                                                        |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`key-spacing`💀](https://eslint.org/docs/latest/rules/key-spacing)                                                 |  ✔️       |           |        |        |           |          | Enforce consistent spacing between keys and values in object literal properties

                                              |
| `@ts/keyword-spacing`                                                                                               |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`linebreak-style`💀](https://eslint.org/docs/latest/rules/linebreak-style)                                         |  ✔️       |           |        |        |           |          | Enforce consistent linebreak style

                                                                                           |
| [`lines-around-directive`💀](https://eslint.org/docs/latest/rules/lines-around-directive)                           |  ✔️       |           |        |        |           |          | Require or disallow newlines around directives

                                                                               |
| `@ts/lines-between-class-members`                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`max-classes-per-file`](https://eslint.org/docs/latest/rules/max-classes-per-file)                                 |  ✔️       |           |        |        |           |          | Enforce a maximum number of classes per file

                                                                                 |
| [`max-len`💀](https://eslint.org/docs/latest/rules/max-len)                                                         |  ✔️       |           |        |        |           |          | Enforce a maximum line length

                                                                                                |
| [`@ts/naming-convention`](https://typescript-eslint.io/rules/naming-convention)                                     |  ✔️       |           |        |        |           |          | Enforce naming conventions for everything across a codebase

                                                                  |
| [`new-cap`](https://eslint.org/docs/latest/rules/new-cap)                                                           |  ✔️       |           |        |        |           |          | Require constructor names to begin with a capital letter

                                                                     |
| [`new-parens`💀](https://eslint.org/docs/latest/rules/new-parens)                                                   |  ✔️       |           |        |        |           |          | Enforce or disallow parentheses when invoking a constructor with no arguments

                                                |
| [`newline-per-chained-call`💀](https://eslint.org/docs/latest/rules/newline-per-chained-call)                       |  ✔️       |           |        |        |           |          | Require a newline after each call in a method chain

                                                                          |
| [`@ts/no-array-constructor`🧱](https://typescript-eslint.io/rules/no-array-constructor)                             |  ✔️       |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow generic `Array` constructors

                                                                                        |
| [`@ts/no-array-delete`](https://typescript-eslint.io/rules/no-array-delete)                                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow using the `delete` operator on array values

                                                                         |
| [`no-async-promise-executor`](https://eslint.org/docs/latest/rules/no-async-promise-executor)                       |  ✔️       |  ✔️       |        |        |           |          | Disallow using an async function as a Promise executor

                                                                       |
| [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop)                                         |  ✔️       |           |        |        |           |          | Disallow `await` inside of loops

                                                                                             |
| [`@ts/no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string)                                     |           |  ✔️       |        | 🟩 rec |           |          | Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified

 |
| [`no-bitwise`](https://eslint.org/docs/latest/rules/no-bitwise)                                                     |  ✔️       |           |        |        |           |          | Disallow bitwise operators

                                                                                                   |
| [`no-buffer-constructor`💀](https://eslint.org/docs/latest/rules/no-buffer-constructor)                             |  ✔️       |           |        |        |           |          | Disallow use of the `Buffer()` constructor

                                                                                   |
| [`no-caller`](https://eslint.org/docs/latest/rules/no-caller)                                                       |  ✔️       |           |        |        |           |          | Disallow the use of `arguments.caller` or `arguments.callee`

                                                                 |
| [`no-case-declarations`](https://eslint.org/docs/latest/rules/no-case-declarations)                                 |  ✔️       |  ✔️       |        |        |           |          | Disallow lexical declarations in case clauses

                                                                                |
| [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign)                                           |  ✔️       |           |        |        |           |          | Disallow reassigning class members

                                                                                           |
| [`no-compare-neg-zero`](https://eslint.org/docs/latest/rules/no-compare-neg-zero)                                   |  ✔️       |  ✔️       |        |        |           |          | Disallow comparing against `-0`

                                                                                              |
| [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)                                             |  ✔️       |  ✔️       |        |        |           |          | Disallow assignment operators in conditional expressions

                                                                     |
| [`no-confusing-arrow`💀](https://eslint.org/docs/latest/rules/no-confusing-arrow)                                   |  ✔️       |           |        |        |           |          | Disallow arrow functions where they could be confused with comparisons

                                                       |
| [`no-constant-binary-expression`](https://eslint.org/docs/latest/rules/no-constant-binary-expression)               |           |  ✔️       |        |        |           |          | Disallow expressions where the operation doesn't affect the value

                                                            |
| [`no-constant-condition`](https://eslint.org/docs/latest/rules/no-constant-condition)                               |           |  ✔️       |        |        |           |          | Disallow constant expressions in conditions

                                                                                  |
| [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return)                               |  ✔️       |           |        |        |           |          | Disallow returning value from constructor

                                                                                    |
| [`no-continue`](https://eslint.org/docs/latest/rules/no-continue)                                                   |  ✔️       |           |        |        |           |          | Disallow `continue` statements

                                                                                               |
| [`no-control-regex`](https://eslint.org/docs/latest/rules/no-control-regex)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow control characters in regular expressions

                                                                           |
| [`no-debugger`](https://eslint.org/docs/latest/rules/no-debugger)                                                   |  ✔️       |  ✔️       |        |        |           |          | Disallow the use of `debugger`

                                                                                               |
| [`no-delete-var`](https://eslint.org/docs/latest/rules/no-delete-var)                                               |  ✔️       |  ✔️       |        |        |           |          | Disallow deleting variables

                                                                                                  |
| [`@ts/no-dupe-class-members`🧱](https://typescript-eslint.io/rules/no-dupe-class-members)                           |  ✔️       |           | 🧱 ext |        |           |          | Disallow duplicate class members

                                                                                             |
| [`no-dupe-else-if`](https://eslint.org/docs/latest/rules/no-dupe-else-if)                                           |  ✔️       |  ✔️       |        |        |           |          | Disallow duplicate conditions in if-else-if chains

                                                                           |
| [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case)                                       |  ✔️       |  ✔️       |        |        |           |          | Disallow duplicate case labels

                                                                                               |
| [`@ts/no-duplicate-enum-values`](https://typescript-eslint.io/rules/no-duplicate-enum-values)                       |           |  ✔️       |        | 🟩 rec |           |          | Disallow duplicate enum member values

                                                                                        |
| [`@ts/no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents)           |           |  ✔️       |        | 🟩 rec |           |          | Disallow duplicate constituents of union or intersection types

                                                               |
| [`no-else-return`](https://eslint.org/docs/latest/rules/no-else-return)                                             |  ✔️       |           |        |        |           |          | Disallow `else` blocks after `return` statements in `if` statements

                                                          |
| [`no-empty`](https://eslint.org/docs/latest/rules/no-empty)                                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow empty block statements

                                                                                              |
| [`no-empty-character-class`](https://eslint.org/docs/latest/rules/no-empty-character-class)                         |  ✔️       |  ✔️       |        |        |           |          | Disallow empty character classes in regular expressions

                                                                      |
| [`@ts/no-empty-function`🧱](https://typescript-eslint.io/rules/no-empty-function)                                   |  ✔️       |           | 🧱 ext |        |           | 🔸 style | Disallow empty functions

                                                                                                     |
| [`@ts/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type)                               |           |  ✔️       |        | 🟩 rec |           |          | Disallow accidentally using the "empty object" type

                                                                          |
| [`no-empty-pattern`](https://eslint.org/docs/latest/rules/no-empty-pattern)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow empty destructuring patterns

                                                                                        |
| [`no-empty-static-block`](https://eslint.org/docs/latest/rules/no-empty-static-block)                               |           |  ✔️       |        |        |           |          | Disallow empty static blocks

                                                                                                 |
| [`no-eval`](https://eslint.org/docs/latest/rules/no-eval)                                                           |  ✔️       |           |        |        |           |          | Disallow the use of `eval()`

                                                                                                 |
| [`no-ex-assign`](https://eslint.org/docs/latest/rules/no-ex-assign)                                                 |  ✔️       |  ✔️       |        |        |           |          | Disallow reassigning exceptions in `catch` clauses

                                                                           |
| [`@ts/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any)                                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow the `any` type

                                                                                                      |
| [`no-extend-native`](https://eslint.org/docs/latest/rules/no-extend-native)                                         |  ✔️       |           |        |        |           |          | Disallow extending native types

                                                                                              |
| [`no-extra-bind`](https://eslint.org/docs/latest/rules/no-extra-bind)                                               |  ✔️       |           |        |        |           |          | Disallow unnecessary calls to `.bind()`

                                                                                      |
| [`no-extra-boolean-cast`](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)                               |  ✔️       |  ✔️       |        |        |           |          | Disallow unnecessary boolean casts

                                                                                           |
| [`no-extra-label`](https://eslint.org/docs/latest/rules/no-extra-label)                                             |  ✔️       |           |        |        |           |          | Disallow unnecessary labels

                                                                                                  |
| [`@ts/no-extra-non-null-assertion`](https://typescript-eslint.io/rules/no-extra-non-null-assertion)                 |           |  ✔️       |        | 🟩 rec |           |          | Disallow extra non-null assertions

                                                                                           |
| `@ts/no-extra-semi`                                                                                                 |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`no-fallthrough`](https://eslint.org/docs/latest/rules/no-fallthrough)                                             |  ✔️       |  ✔️       |        |        |           |          | Disallow fallthrough of `case` statements

                                                                                    |
| [`no-floating-decimal`💀](https://eslint.org/docs/latest/rules/no-floating-decimal)                                 |  ✔️       |           |        |        |           |          | Disallow leading or trailing decimal points in numeric literals

                                                              |
| [`@ts/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)                               |           |  ✔️       |        | 🟩 rec |           |          | Require Promise-like statements to be handled appropriately

                                                                  |
| [`@ts/no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array)                                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow iterating over an array with a for-in loop

                                                                          |
| [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow assignments to native objects or read-only global variables

                                                         |
| [`@ts/no-implied-eval`🧱](https://typescript-eslint.io/rules/no-implied-eval)                                       |  ✔️       |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow the use of `eval()`-like functions

                                                                                  |
| [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations)                               |  ✔️       |           |        |        |           |          | Disallow variable or `function` declarations in nested blocks

                                                                |
| [`no-invalid-regexp`](https://eslint.org/docs/latest/rules/no-invalid-regexp)                                       |  ✔️       |  ✔️       |        |        |           |          | Disallow invalid regular expression strings in `RegExp` constructors

                                                         |
| [`no-irregular-whitespace`](https://eslint.org/docs/latest/rules/no-irregular-whitespace)                           |  ✔️       |  ✔️       |        |        |           |          | Disallow irregular whitespace

                                                                                                |
| [`no-iterator`](https://eslint.org/docs/latest/rules/no-iterator)                                                   |  ✔️       |           |        |        |           |          | Disallow the use of the `__iterator__` property

                                                                              |
| [`no-label-var`](https://eslint.org/docs/latest/rules/no-label-var)                                                 |  ✔️       |           |        |        |           |          | Disallow labels that share a name with a variable

                                                                            |
| [`no-labels`](https://eslint.org/docs/latest/rules/no-labels)                                                       |  ✔️       |           |        |        |           |          | Disallow labeled statements

                                                                                                  |
| [`no-lone-blocks`](https://eslint.org/docs/latest/rules/no-lone-blocks)                                             |  ✔️       |           |        |        |           |          | Disallow unnecessary nested blocks

                                                                                           |
| [`no-lonely-if`](https://eslint.org/docs/latest/rules/no-lonely-if)                                                 |  ✔️       |           |        |        |           |          | Disallow `if` statements as the only statement in `else` blocks

                                                              |
| [`@ts/no-loop-func`🧱](https://typescript-eslint.io/rules/no-loop-func)                                             |  ✔️       |           | 🧱 ext |        |           |          | Disallow function declarations that contain unsafe references inside loop statements

                                         |
| [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)                                 |           |  ✔️       |        |        |           |          | Disallow literal numbers that lose precision

                                                                                 |
| [`@ts/no-loss-of-precision`💀🧱](https://typescript-eslint.io/rules/no-loss-of-precision)                           |  ✔️       |           | 🧱 ext |        |           |          | Disallow literal numbers that lose precision

                                                                                 |
| [`no-misleading-character-class`](https://eslint.org/docs/latest/rules/no-misleading-character-class)               |  ✔️       |  ✔️       |        |        |           |          | Disallow characters which are made with multiple code points in character class syntax

                                       |
| [`@ts/no-misused-new`](https://typescript-eslint.io/rules/no-misused-new)                                           |           |  ✔️       |        | 🟩 rec |           |          | Enforce valid definition of `new` and `constructor`

                                                                          |
| [`@ts/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)                                 |           |  ✔️       |        | 🟩 rec |           |          | Disallow Promises in places not designed to handle them

                                                                      |
| [`no-mixed-operators`💀](https://eslint.org/docs/latest/rules/no-mixed-operators)                                   |  ✔️       |           |        |        |           |          | Disallow mixed binary operators

                                                                                              |
| [`no-mixed-spaces-and-tabs`💀](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)                       |  ✔️       |           |        |        |           |          | Disallow mixed spaces and tabs for indentation

                                                                               |
| [`no-multi-assign`](https://eslint.org/docs/latest/rules/no-multi-assign)                                           |  ✔️       |           |        |        |           |          | Disallow use of chained assignment expressions

                                                                               |
| [`no-multi-spaces`💀](https://eslint.org/docs/latest/rules/no-multi-spaces)                                         |  ✔️       |           |        |        |           |          | Disallow multiple spaces

                                                                                                     |
| [`no-multi-str`](https://eslint.org/docs/latest/rules/no-multi-str)                                                 |  ✔️       |           |        |        |           |          | Disallow multiline strings

                                                                                                   |
| [`no-multiple-empty-lines`💀](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)                         |  ✔️       |           |        |        |           |          | Disallow multiple empty lines

                                                                                                |
| [`@ts/no-namespace`](https://typescript-eslint.io/rules/no-namespace)                                               |           |  ✔️       |        | 🟩 rec |           |          | Disallow TypeScript namespaces

                                                                                               |
| [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary)                                       |  ✔️       |           |        |        |           |          | Disallow nested ternary expressions

                                                                                          |
| [`no-new`](https://eslint.org/docs/latest/rules/no-new)                                                             |  ✔️       |           |        |        |           |          | Disallow `new` operators outside of assignments or comparisons

                                                               |
| [`no-new-object`💀](https://eslint.org/docs/latest/rules/no-new-object)                                             |  ✔️       |           |        |        |           |          | Disallow `Object` constructors

                                                                                               |
| [`no-new-require`💀](https://eslint.org/docs/latest/rules/no-new-require)                                           |  ✔️       |           |        |        |           |          | Disallow `new` operators with calls to `require`

                                                                             |
| [`no-new-wrappers`](https://eslint.org/docs/latest/rules/no-new-wrappers)                                           |  ✔️       |           |        |        |           |          | Disallow `new` operators with the `String`, `Number`, and `Boolean` objects

                                                  |
| [`@ts/no-non-null-asserted-optional-chain`](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) |           |  ✔️       |        | 🟩 rec |           |          | Disallow non-null assertions after an optional chain expression

                                                              |
| [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)                     |  ✔️       |  ✔️       |        |        |           |          | Disallow `\8` and `\9` escape sequences in string literals

                                                                   |
| [`no-octal`](https://eslint.org/docs/latest/rules/no-octal)                                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow octal literals

                                                                                                      |
| [`no-octal-escape`](https://eslint.org/docs/latest/rules/no-octal-escape)                                           |  ✔️       |           |        |        |           |          | Disallow octal escape sequences in string literals

                                                                           |
| [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign)                                       |  ✔️       |           |        |        |           |          | Disallow reassigning function parameters

                                                                                     |
| [`no-path-concat`💀](https://eslint.org/docs/latest/rules/no-path-concat)                                           |  ✔️       |           |        |        |           |          | Disallow string concatenation with `__dirname` and `__filename`

                                                              |
| [`no-plusplus`](https://eslint.org/docs/latest/rules/no-plusplus)                                                   |  ✔️       |           |        |        |           |          | Disallow the unary operators `++` and `--`

                                                                                   |
| [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return)                     |  ✔️       |           |        |        |           |          | Disallow returning values from Promise executor functions

                                                                    |
| [`no-proto`](https://eslint.org/docs/latest/rules/no-proto)                                                         |  ✔️       |           |        |        |           |          | Disallow the use of the `__proto__` property

                                                                                 |
| [`no-prototype-builtins`](https://eslint.org/docs/latest/rules/no-prototype-builtins)                               |  ✔️       |  ✔️       |        |        |           |          | Disallow calling some `Object.prototype` methods directly on objects

                                                         |
| [`@ts/no-redeclare`🧱](https://typescript-eslint.io/rules/no-redeclare)                                             |  ✔️       |           | 🧱 ext |        |           |          | Disallow variable redeclaration

                                                                                              |
| [`@ts/no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents)           |           |  ✔️       |        | 🟩 rec |           |          | Disallow members of unions and intersections that do nothing or override type information

                                    |
| [`no-regex-spaces`](https://eslint.org/docs/latest/rules/no-regex-spaces)                                           |  ✔️       |  ✔️       |        |        |           |          | Disallow multiple spaces in regular expressions

                                                                              |
| [`@ts/no-require-imports`](https://typescript-eslint.io/rules/no-require-imports)                                   |           |  ✔️       |        | 🟩 rec |           |          | Disallow invocation of `require()`

                                                                                           |
| [`no-restricted-exports`](https://eslint.org/docs/latest/rules/no-restricted-exports)                               |  ✔️       |           |        |        |           |          | Disallow specified names in exports

                                                                                          |
| [`no-restricted-globals`](https://eslint.org/docs/latest/rules/no-restricted-globals)                               |  ✔️       |           |        |        |           |          | Disallow specified global variables

                                                                                          |
| [`no-restricted-properties`](https://eslint.org/docs/latest/rules/no-restricted-properties)                         |  ✔️       |           |        |        |           |          | Disallow certain properties on certain objects

                                                                               |
| [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax)                                 |  ✔️       |           |        |        |           |          | Disallow specified syntax

                                                                                                    |
| [`no-return-assign`](https://eslint.org/docs/latest/rules/no-return-assign)                                         |  ✔️       |           |        |        |           |          | Disallow assignment operators in `return` statements

                                                                         |
| [`no-script-url`](https://eslint.org/docs/latest/rules/no-script-url)                                               |  ✔️       |           |        |        |           |          | Disallow `javascript:` URLs

                                                                                                  |
| [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign)                                             |  ✔️       |  ✔️       |        |        |           |          | Disallow assignments where both sides are exactly the same

                                                                   |
| [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare)                                           |  ✔️       |           |        |        |           |          | Disallow comparisons where both sides are exactly the same

                                                                   |
| [`no-sequences`](https://eslint.org/docs/latest/rules/no-sequences)                                                 |  ✔️       |           |        |        |           |          | Disallow comma operators

                                                                                                     |
| [`@ts/no-shadow`🧱](https://typescript-eslint.io/rules/no-shadow)                                                   |  ✔️       |           | 🧱 ext |        |           |          | Disallow variable declarations from shadowing variables declared in the outer scope

                                          |
| [`no-shadow-restricted-names`](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)                     |  ✔️       |  ✔️       |        |        |           |          | Disallow identifiers from shadowing restricted names

                                                                         |
| [`no-spaced-func`💀](https://eslint.org/docs/latest/rules/no-spaced-func)                                           |  ✔️       |           |        |        |           |          | Disallow spacing between function identifiers and their applications (deprecated)

                                            |
| [`no-sparse-arrays`](https://eslint.org/docs/latest/rules/no-sparse-arrays)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow sparse arrays

                                                                                                       |
| [`no-tabs`💀](https://eslint.org/docs/latest/rules/no-tabs)                                                         |  ✔️       |           |        |        |           |          | Disallow all tabs

                                                                                                            |
| [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string)                   |  ✔️       |           |        |        |           |          | Disallow template literal placeholder syntax in regular strings

                                                              |
| [`@ts/no-this-alias`](https://typescript-eslint.io/rules/no-this-alias)                                             |           |  ✔️       |        | 🟩 rec |           |          | Disallow aliasing `this`

                                                                                                     |
| `@ts/no-throw-literal`                                                                                              |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`no-trailing-spaces`💀](https://eslint.org/docs/latest/rules/no-trailing-spaces)                                   |  ✔️       |           |        |        |           |          | Disallow trailing whitespace at the end of lines

                                                                             |
| [`no-undef-init`](https://eslint.org/docs/latest/rules/no-undef-init)                                               |  ✔️       |           |        |        |           |          | Disallow initializing variables to `undefined`

                                                                               |
| [`no-underscore-dangle`](https://eslint.org/docs/latest/rules/no-underscore-dangle)                                 |  ✔️       |           |        |        |           |          | Disallow dangling underscores in identifiers

                                                                                 |
| [`no-unexpected-multiline`](https://eslint.org/docs/latest/rules/no-unexpected-multiline)                           |  ✔️       |  ✔️       |        |        |           |          | Disallow confusing multiline expressions

                                                                                     |
| [`@ts/no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)             |           |  ✔️       |        | 🟩 rec |           |          | Disallow type assertions that do not change the type of an expression

                                                        |
| [`@ts/no-unnecessary-type-constraint`](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)           |           |  ✔️       |        | 🟩 rec |           |          | Disallow unnecessary constraints on generic types

                                                                            |
| [`no-unneeded-ternary`](https://eslint.org/docs/latest/rules/no-unneeded-ternary)                                   |  ✔️       |           |        |        |           |          | Disallow ternary operators when simpler alternatives exist

                                                                   |
| [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop)                                   |  ✔️       |           |        |        |           |          | Disallow loops with a body that allows only one iteration

                                                                    |
| [`@ts/no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument)                                   |           |  ✔️       |        | 🟩 rec |           |          | Disallow calling a function with a value with type `any`

                                                                     |
| [`@ts/no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment)                               |           |  ✔️       |        | 🟩 rec |           |          | Disallow assigning a value with type `any` to variables and properties

                                                       |
| [`@ts/no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call)                                           |           |  ✔️       |        | 🟩 rec |           |          | Disallow calling a value with type `any`

                                                                                     |
| [`@ts/no-unsafe-declaration-merging`](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)             |           |  ✔️       |        | 🟩 rec |           |          | Disallow unsafe declaration merging

                                                                                          |
| [`@ts/no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)                     |           |  ✔️       |        | 🟩 rec |           |          | Disallow comparing an enum value with a non-enum value

                                                                       |
| [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally)                                       |  ✔️       |  ✔️       |        |        |           |          | Disallow control flow statements in `finally` blocks

                                                                         |
| [`@ts/no-unsafe-function-type`](https://typescript-eslint.io/rules/no-unsafe-function-type)                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow using the unsafe built-in Function type

                                                                             |
| [`@ts/no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access)                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow member access on a value with type `any`

                                                                            |
| [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)                   |  ✔️       |  ✔️       |        |        |           |          | Disallow use of optional chaining in contexts where the `undefined` value is not allowed

                                     |
| [`@ts/no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return)                                       |           |  ✔️       |        | 🟩 rec |           |          | Disallow returning a value with type `any` from a function

                                                                   |
| [`@ts/no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus)                             |           |  ✔️       |        | 🟩 rec |           |          | Require unary negation to take a number

                                                                                      |
| [`@ts/no-unused-expressions`🧱](https://typescript-eslint.io/rules/no-unused-expressions)                           |  ✔️       |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow unused expressions

                                                                                                  |
| [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow unused labels

                                                                                                       |
| [`no-unused-private-class-members`](https://eslint.org/docs/latest/rules/no-unused-private-class-members)           |           |  ✔️       |        |        |           |          | Disallow unused private class members

                                                                                        |
| [`@ts/no-unused-vars`🧱](https://typescript-eslint.io/rules/no-unused-vars)                                         |  ✔️       |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow unused variables

                                                                                                    |
| [`@ts/no-use-before-define`🧱](https://typescript-eslint.io/rules/no-use-before-define)                             |  ✔️       |           | 🧱 ext |        |           |          | Disallow the use of variables before they are defined

                                                                        |
| [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)                         |  ✔️       |  ✔️       |        |        |           |          | Disallow useless backreferences in regular expressions

                                                                       |
| [`no-useless-catch`](https://eslint.org/docs/latest/rules/no-useless-catch)                                         |  ✔️       |  ✔️       |        |        |           |          | Disallow unnecessary `catch` clauses

                                                                                         |
| [`no-useless-computed-key`](https://eslint.org/docs/latest/rules/no-useless-computed-key)                           |  ✔️       |           |        |        |           |          | Disallow unnecessary computed property keys in objects and classes

                                                           |
| [`no-useless-concat`](https://eslint.org/docs/latest/rules/no-useless-concat)                                       |  ✔️       |           |        |        |           |          | Disallow unnecessary concatenation of literals or template literals

                                                          |
| [`@ts/no-useless-constructor`🧱](https://typescript-eslint.io/rules/no-useless-constructor)                         |  ✔️       |           | 🧱 ext |        | 🔵 strict |          | Disallow unnecessary constructors

                                                                                            |
| [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape)                                       |  ✔️       |  ✔️       |        |        |           |          | Disallow unnecessary escape characters

                                                                                       |
| [`no-useless-rename`](https://eslint.org/docs/latest/rules/no-useless-rename)                                       |  ✔️       |           |        |        |           |          | Disallow renaming import, export, and destructured assignments to the same name

                                              |
| [`no-useless-return`](https://eslint.org/docs/latest/rules/no-useless-return)                                       |  ✔️       |           |        |        |           |          | Disallow redundant return statements

                                                                                         |
| [`no-var`](https://eslint.org/docs/latest/rules/no-var)                                                             |  ✔️       |  ✔️       |        |        |           |          | Require `let` or `const` instead of `var`

                                                                                    |
| [`no-void`](https://eslint.org/docs/latest/rules/no-void)                                                           |  ✔️       |           |        |        |           |          | Disallow `void` operators

                                                                                                    |
| [`no-whitespace-before-property`💀](https://eslint.org/docs/latest/rules/no-whitespace-before-property)             |  ✔️       |           |        |        |           |          | Disallow whitespace before properties

                                                                                        |
| [`no-with`](https://eslint.org/docs/latest/rules/no-with)                                                           |  ✔️       |  ✔️       |        |        |           |          | Disallow `with` statements

                                                                                                   |
| [`@ts/no-wrapper-object-types`](https://typescript-eslint.io/rules/no-wrapper-object-types)                         |           |  ✔️       |        | 🟩 rec |           |          | Disallow using confusing built-in primitive class wrappers

                                                                   |
| [`nonblock-statement-body-position`💀](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)       |  ✔️       |           |        |        |           |          | Enforce the location of single-line statements

                                                                               |
| [`object-curly-newline`💀](https://eslint.org/docs/latest/rules/object-curly-newline)                               |  ✔️       |           |        |        |           |          | Enforce consistent line breaks after opening and before closing braces

                                                       |
| `@ts/object-curly-spacing`                                                                                          |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`object-property-newline`💀](https://eslint.org/docs/latest/rules/object-property-newline)                         |  ✔️       |           |        |        |           |          | Enforce placing object properties on separate lines

                                                                          |
| [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand)                                         |  ✔️       |           |        |        |           |          | Require or disallow method and property shorthand syntax for object literals

                                                 |
| [`one-var`](https://eslint.org/docs/latest/rules/one-var)                                                           |  ✔️       |           |        |        |           |          | Enforce variables to be declared either together or separately in functions

                                                  |
| [`one-var-declaration-per-line`💀](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)               |  ✔️       |           |        |        |           |          | Require or disallow newlines around variable declarations

                                                                    |
| [`@ts/only-throw-error`🧱](https://typescript-eslint.io/rules/only-throw-error)                                     |           |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow throwing non-`Error` values as exceptions

                                                                           |
| [`operator-assignment`](https://eslint.org/docs/latest/rules/operator-assignment)                                   |  ✔️       |           |        |        |           |          | Require or disallow assignment operator shorthand where possible

                                                             |
| [`operator-linebreak`💀](https://eslint.org/docs/latest/rules/operator-linebreak)                                   |  ✔️       |           |        |        |           |          | Enforce consistent linebreak style for operators

                                                                             |
| [`padded-blocks`💀](https://eslint.org/docs/latest/rules/padded-blocks)                                             |  ✔️       |           |        |        |           |          | Require or disallow padding within blocks

                                                                                    |
| [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback)                               |  ✔️       |           |        |        |           |          | Require using arrow functions for callbacks

                                                                                  |
| [`@ts/prefer-as-const`](https://typescript-eslint.io/rules/prefer-as-const)                                         |           |  ✔️       |        | 🟩 rec |           |          | Enforce the use of `as const` over literal type

                                                                              |
| [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const)                                                 |  ✔️       |  ✔️       |        |        |           |          | Require `const` declarations for variables that are never reassigned after declared

                                          |
| [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring)                                 |  ✔️       |           |        |        |           |          | Require destructuring from arrays and/or objects

                                                                             |
| [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)             |  ✔️       |           |        |        |           |          | Disallow the use of `Math.pow` in favor of the `**` operator

                                                                 |
| [`@ts/prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword)                       |           |  ✔️       |        | 🟩 rec |           |          | Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules

                                 |
| [`prefer-numeric-literals`](https://eslint.org/docs/latest/rules/prefer-numeric-literals)                           |  ✔️       |           |        |        |           |          | Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals

                            |
| [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread)                                 |  ✔️       |           |        |        |           |          | Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead

      |
| [`@ts/prefer-promise-reject-errors`🧱](https://typescript-eslint.io/rules/prefer-promise-reject-errors)             |           |  ✔️       | 🧱 ext | 🟩 rec |           |          | Require using Error objects as Promise rejection reasons

                                                                     |
| [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)                 |  ✔️       |           |        |        |           |          | Require using Error objects as Promise rejection reasons

                                                                     |
| [`prefer-regex-literals`](https://eslint.org/docs/latest/rules/prefer-regex-literals)                               |  ✔️       |           |        |        |           |          | Disallow use of the `RegExp` constructor in favor of regular expression literals

                                             |
| [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params)                                     |  ✔️       |  ✔️       |        |        |           |          | Require rest parameters instead of `arguments`

                                                                               |
| [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread)                                               |  ✔️       |  ✔️       |        |        |           |          | Require spread operators instead of `.apply()`

                                                                               |
| [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template)                                           |  ✔️       |           |        |        |           |          | Require template literals instead of string concatenation

                                                                    |
| [`quote-props`💀](https://eslint.org/docs/latest/rules/quote-props)                                                 |  ✔️       |           |        |        |           |          | Require quotes around object literal property names

                                                                          |
| `@ts/quotes`                                                                                                        |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`radix`](https://eslint.org/docs/latest/rules/radix)                                                               |  ✔️       |           |        |        |           |          | Enforce the consistent use of the radix argument when using `parseInt()`

                                                     |
| `react-hooks/exhaustive-deps`                                                                                       |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `react-hooks/rules-of-hooks`                                                                                        |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`@ts/require-await`🧱](https://typescript-eslint.io/rules/require-await)                                           |           |  ✔️       | 🧱 ext | 🟩 rec |           |          | Disallow async functions which do not return promises and have no `await` expression

                                         |
| [`require-yield`](https://eslint.org/docs/latest/rules/require-yield)                                               |  ✔️       |  ✔️       |        |        |           |          | Require generator functions to contain `yield`

                                                                               |
| [`rest-spread-spacing`💀](https://eslint.org/docs/latest/rules/rest-spread-spacing)                                 |  ✔️       |           |        |        |           |          | Enforce spacing between rest and spread operators and their expressions

                                                      |
| [`@ts/restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands)                           |           |  ✔️       |        |        |           |          | Require both operands of addition to be the same type and be `bigint`, `number`, or `string`

                                 |
| [`@ts/restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions)             |           |  ✔️       |        |        |           |          | Enforce template literal expressions to be of `string` type

                                                                  |
| [`@ts/return-await`](https://typescript-eslint.io/rules/return-await)                                               |  ✔️       |           |        |        |           |          | Enforce consistent awaiting of returned promises

                                                                             |
| `@ts/semi`                                                                                                          |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`semi-spacing`💀](https://eslint.org/docs/latest/rules/semi-spacing)                                               |  ✔️       |           |        |        |           |          | Enforce consistent spacing before and after semicolons

                                                                       |
| [`semi-style`💀](https://eslint.org/docs/latest/rules/semi-style)                                                   |  ✔️       |           |        |        |           |          | Enforce location of semicolons

                                                                                               |
| `@ts/space-before-blocks`                                                                                           |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| `@ts/space-before-function-paren`                                                                                   |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`space-in-parens`💀](https://eslint.org/docs/latest/rules/space-in-parens)                                         |  ✔️       |           |        |        |           |          | Enforce consistent spacing inside parentheses

                                                                                |
| `@ts/space-infix-ops`                                                                                               |  ✔️       |           |        |        |           |          | undefined

                                                                                                                    |
| [`space-unary-ops`💀](https://eslint.org/docs/latest/rules/space-unary-ops)                                         |  ✔️       |           |        |        |           |          | Enforce consistent spacing before or after unary operators

                                                                   |
| [`spaced-comment`💀](https://eslint.org/docs/latest/rules/spaced-comment)                                           |  ✔️       |           |        |        |           |          | Enforce consistent spacing after the `//` or `/*` in a comment

                                                               |
| [`strict`](https://eslint.org/docs/latest/rules/strict)                                                             |  ✔️       |           |        |        |           |          | Require or disallow strict mode directives

                                                                                   |
| [`switch-colon-spacing`💀](https://eslint.org/docs/latest/rules/switch-colon-spacing)                               |  ✔️       |           |        |        |           |          | Enforce spacing around colons of switch statements

                                                                           |
| [`symbol-description`](https://eslint.org/docs/latest/rules/symbol-description)                                     |  ✔️       |           |        |        |           |          | Require symbol descriptions

                                                                                                  |
| [`template-curly-spacing`💀](https://eslint.org/docs/latest/rules/template-curly-spacing)                           |  ✔️       |           |        |        |           |          | Require or disallow spacing around embedded expressions of template strings

                                                  |
| [`template-tag-spacing`💀](https://eslint.org/docs/latest/rules/template-tag-spacing)                               |  ✔️       |           |        |        |           |          | Require or disallow spacing between template tags and their literals

                                                         |
| [`@ts/triple-slash-reference`](https://typescript-eslint.io/rules/triple-slash-reference)                           |           |  ✔️       |        | 🟩 rec |           |          | Disallow certain triple slash directives in favor of ES6-style import declarations

                                           |
| [`@ts/unbound-method`](https://typescript-eslint.io/rules/unbound-method)                                           |           |  ✔️       |        | 🟩 rec |           |          | Enforce unbound methods are called with their expected scope

                                                                 |
| [`unicode-bom`](https://eslint.org/docs/latest/rules/unicode-bom)                                                   |  ✔️       |           |        |        |           |          | Require or disallow Unicode byte order mark (BOM)

                                                                            |
| [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan)                                                       |  ✔️       |  ✔️       |        |        |           |          | Require calls to `isNaN()` when checking for `NaN`

                                                                           |
| [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof)                                                 |           |  ✔️       |        |        |           |          | Enforce comparing `typeof` expressions against valid strings

                                                                 |
| [`vars-on-top`](https://eslint.org/docs/latest/rules/vars-on-top)                                                   |  ✔️       |           |        |        |           |          | Require `var` declarations be placed at the top of their containing scope

                                                    |
| [`wrap-iife`💀](https://eslint.org/docs/latest/rules/wrap-iife)                                                     |  ✔️       |           |        |        |           |          | Require parentheses around immediate `function` invocations

                                                                  |
| [`yield-star-spacing`💀](https://eslint.org/docs/latest/rules/yield-star-spacing)                                   |  ✔️       |           |        |        |           |          | Require or disallow spacing around the `*` in `yield*` expressions

                                                           |
| [`yoda`](https://eslint.org/docs/latest/rules/yoda)                                                                 |  ✔️       |           |        |        |           |          | Require or disallow "Yoda" conditions

                                                                                        |
