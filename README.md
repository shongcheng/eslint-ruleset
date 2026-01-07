# ESLint-Ruleset

## Commands

### Inspect Config through Browser
```shell
eslint --inspect-config
```

### ESLINT Print Config

```shell
eslint -c tools/ruleset/react-proposal_2025-08-08.mjs --print-config dummy.ts
```

#### 0 (or "off"):
Turns the rule off completely. ESLint will not enforce this rule, and no errors or warnings will be reported even if the code violates it.

#### 1 (or "warn"):
Turns the rule on as a warning. If the code violates the rule, ESLint will report a warning. Warnings do not typically affect the exit code of the ESLint process, meaning a build or CI process might still pass even with warnings present.

#### 2 (or "error"):
Turns the rule on as an error. If the code violates the rule, ESLint will report an error. Errors cause ESLint to exit with a non-zero exit code (typically 1), which can be used to fail builds, pre-commit checks, or CI/CD pipelines, enforcing strict code compliance.

### Print Rule Comparison SUmmary

```shell
# Compare AirBnB with React proposal 2025-08-08 and output to HTML
tsx tools/compare-airbnb-with-react-proposal_2025-08-08.mjs > output/airbnb-vs-react-proposal_2025-08-08.md && ./to-html.sh "output/airbnb-vs-react-proposal_2025-08-08.md" > output/airbnb-vs-react-proposal_2025-08-08.md.html
```

```shell
# Compare AirBnB with latest ESLint and output to HTML
tsx tools/compare-airbnb-with-latest-eslintrules.mjs > output/airbnb-vs-latest.md && ./to-html.sh output/airbnb-vs-latest.md > output/airbnb-vs-latest.md.html
```

```shell
# to compare with AirBnB with latest ESLint
npx -y tsx tools/compare-airbnb-with-latest-eslintrules.mjs > airbnb-vs-latest.md
```

```shell
# convert to HTML
./to-html.sh > airbnb-vs-latest.md.html

# npx -y marked -i airbnb-vs-latest.md -o airbnb-vs-latest.md.html
```
