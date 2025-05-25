import { markdownTable } from 'markdown-table';

import { builtinRules as eslintRules } from "eslint/use-at-your-own-risk";
import tseslintRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import * as YAML from 'yaml';
import * as fs from 'node:fs';


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

const loadAssessments = (path) => {
  const assessments = YAML.parse(fs.readFileSync(path).toString());
  return assessments;
}

/**
 * Dual newlines to indicate hard line break, single newlines are ignored
 * @param content
 * @return {*}
 */
const encodeAsMarkdownCellContent = (content, linePrefix = '') => {
  return content.replaceAll('\n\n', `<br/>${linePrefix}`).replaceAll('\n', '')
}

const formatAssessmentAsCellMarkdown = (content, deprecated) => {
  let result = '';
  if (deprecated) {
    result += `<br/>**💀 Deprecated 💀**`;
  }
  if (content?.details) {
    result += `<br/><br/>*Details:* ${encodeAsMarkdownCellContent(content.details)}`;
  }
  if (content?.assessment) {
    result += `<br/><br/>**Assessment:**<br/>&nbsp;&nbsp;${encodeAsMarkdownCellContent(content.assessment, '&nbsp;&nbsp;')}`;
  }
  return result;
}

export const generateTable = (rulesDb) => {
  const configNames = Object.keys(rulesDb.getConfigs());
  const rules = rulesDb.rules;
  const assessments = loadAssessments('assessments.yaml');
  console.log(
    markdownTable([
      ['', ...configNames, 'ext', 'rec', 'strict', 'style', 'Desc'],
      ...Array.from(rules.keys()).sort(rulesCompareFn).map((ruleName) => {
        const meta = allRules[ruleName]?.meta;
        const deprecated = meta ? meta.deprecated : false;
        const extendsBaseRule = meta?.docs ? meta.docs.extendsBaseRule : false;
        let url = meta?.docs ? meta.docs.url : undefined;
        if (typeof url === 'undefined') {
          const plugin = ruleName.split('/')[0];
          switch (plugin) {
            case '@ts':
              url = `https://eslint.style/rules/ts/${ruleName.replace(plugin + '/', '')}`;
              break;
            case 'import':
              url = `https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/${ruleName.replace(plugin + '/', '')}.md`;
              break;
          }
          if (ruleName.startsWith('@ts/')) {
          } else {

          }
        }
        const description = meta?.docs.description;
        const recommended = meta?.docs.recommended;
        const assessment = assessments[ruleName];
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
          extendsBaseRule ? '🧱 ext' : '',
          recommended === 'recommended' ? '🟩 rec' : '',
          recommended === 'strict' ? '🔵 strict' : '',
          recommended === 'stylistic' ? '🔸 style' : '',
          `${description ?? ''}${formatAssessmentAsCellMarkdown(assessment, deprecated)}`,
        ];
      }),
    ]),
  );
}

export default orderedRules;


