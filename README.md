# ESLint-Ruleset

## Commands

```shell
# to compare with AirBnB with latest ESLint
npx -y tsx tools/compare-airbnb-with-latest-eslintrules.mjs > airbnb-vs-latest.md

# convert to HTML
npx -y marked -i airbnb-vs-latest.md -o airbnb-vs-latest.md.html
```