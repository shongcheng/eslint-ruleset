# ESLint-Ruleset

## Commands

```shell
eslint --inspect-config
```

```shell
eslint --print-config -c tools/ruleset/react-proposal_2025-08-08.mjs dummy.ts
```

```shell
# Compare AirBnB with React proposal 2025-08-08 and output to HTML
tsx tools/compare-airbnb-with-react-proposal_2025-08-08.mjs > airbnb-vs-react-proposal_2025-08-08.md && ./to-html.sh "airbnb-vs-react-proposal_2025-08-08.md" > airbnb-vs-react-proposal_2025-08-08.md.html
```

```shell
# Compare AirBnB with latest ESLint and output to HTML
tsx tools/compare-airbnb-with-latest-eslintrules.mjs > airbnb-vs-latest.md && ./to-html.sh airbnb-vs-latest.md > airbnb-vs-latest.md.html
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
