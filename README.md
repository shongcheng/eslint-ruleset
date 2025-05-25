# ESLint-Ruleset

## Commands

```shell
# Compare AirBnB with latest ESLint and output to HTML
tsx tools/compare-airbnb-with-latest-eslintrules.mjs > airbnb-vs-latest.md && ./to-html.sh > airbnb-vs-latest.md.html
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
