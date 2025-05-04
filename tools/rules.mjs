import { markdownTable } from 'markdown-table';

import { builtinRules as eslintRules } from "eslint/use-at-your-own-risk";
import tseslintRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';


const allRules = Object.keys(tseslintRules).sort().reduce((obj, key) => {
  obj[`@ts/${key}`] = tseslintRules[key];
  return obj;
}, {});

for (const key of eslintRules.keys()) {
  allRules[key] = eslintRules.get(key);
};

const rulesCompareFn = (a, b) => {
  if (!a.startsWith('@ts/')) a = `@ts/${a}`
  if (!b.startsWith('@ts/')) b = `@ts/${b}`
  return a > b ? 1 : -1
};


const orderedRules = Object.keys(allRules).sort(rulesCompareFn).reduce((obj, key) => {
  obj[key] = allRules[key];
  return obj;
}, {});

const normalizeRules = (rules) => Object.keys(rules).reduce((obj, key) => {
  obj[key.replace('@typescript-eslint', '@ts')] = rules[key]
  return obj;
}, {});

/**
 * Normalize and shorten rule names.
 */
export const getEnabledRules = (rules) => {
  // Filter rules to include only those with values 1 (warn) or 2 (error)
  const enabledRules = {};
  Object.entries(rules)
    .filter(([,ruleConfig]) => {
      // Rule configurations can be an array or a single value
      const severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
      return severity === 1 || severity === 2 || severity === 'error'; // Only include rules with severity 1 or 2
    })
    .forEach(([ruleId, ruleConfig]) => {
      enabledRules[ruleId] = ruleConfig;
    })
    return enabledRules;
}

export const generateTable = (rulesDb) => {
  const configNames = Object.keys(rulesDb.getConfigs());
  const rules = rulesDb.rules;

  console.log(
    markdownTable([
      ['', ...configNames, 'Desc'],
      ...Array.from(rules.keys()).sort(rulesCompareFn).map((ruleName) => {
        const meta = allRules[ruleName]?.meta;
        const deprecated = meta ? meta.deprecated : false;
        const extendsBaseRule = meta?.docs ? meta.docs.extendsBaseRule : false;
        const url = meta?.docs ? meta.docs.url : undefined;
        const { description } = meta?.docs;
        return [
          url
            ? `[\`${ruleName}\`${deprecated ? '💀' : ''}${extendsBaseRule ? '🧱' : ''}](${url})`
            : `\`${ruleName}\`${deprecated ? '💀' : ''}${extendsBaseRule ? '🧱' : ''}`,
          ...configNames.map((configName) => {
            const ruleVal = rules.get(ruleName)[configName]
            if (ruleVal && ruleVal[0] === 'off') {
              return ' \u274c '
            } else if (ruleVal !== undefined) {
              return ' \u2714\ufe0f '
            }
          }),
          description,
        ];
      }),
    ]),
  );
}

export default orderedRules;


