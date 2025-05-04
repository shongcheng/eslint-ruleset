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

