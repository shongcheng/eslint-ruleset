/**
 * List all rules included in ESLint config.
 */
import eslint from '@eslint/js';
import { ESLint } from "eslint";
import tseslint from 'typescript-eslint';
// import allRules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import { markdownTable } from 'markdown-table';

import allRules, { getEnabledRules } from './rules.mjs';
// import { version as tseslintVersion } from '@typescript-eslint/eslint-plugin/package.json';
// import { version as eslintVersion } from 'eslint/package.json';
const tseslintVersion= ""
const eslintVersion= ""

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
);

function generateTable(enabledRules) {
  console.log(
    markdownTable([
      ['Rule', 'Config', 'TC', "Rec'd", 'Strict', 'Style'],
      ...Object.entries(allRules).map(([ruleName, { meta }]) => {
        const { deprecated } = meta;
        const { extendsBaseRule, recommended, requiresTypeChecking, url } = meta.docs;
        return [
          `[\`${ruleName}\`${deprecated ? '💀' : ''}${extendsBaseRule ? '🧱' : ''}](${url})`,
          enabledRules.findIndex(r => r === ruleName) > -1 ? '✔️' : '',
          requiresTypeChecking ? '💭' : '',
          recommended === 'recommended' ? '🟩' : '',
          recommended === 'strict' ? '🔵' : '',
          recommended === 'stylistic' ? '🔸' : '',
        ];
      }),
    ]),
  );
}


const e = new ESLint({
  overrideConfig: eslintConfig,
  overrideConfigFile: true,
});

// Get the resolved configuration for the file
const config = await e.calculateConfigForFile('./input.ts');
const rules = await getEnabledRules(config);

console.log(`## Enabled Rules

### Version

\`eslint\` version: \`${eslintVersion}\`

\`typescript-eslint\` version: \`${tseslintVersion}\`

### Table Key

<table>
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
      <th>Emojis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Config</td>
      <td>Included in current config</td>
      <td>
        <ul>
          <li>✔️ = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>TC</td>
      <td>Requires type checking?</td>
      <td>
        <ul>
          <li>💭 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Rec'd</td>
      <td>Recommended</td>
      <td>
        <ul>
          <li>🟩 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Strict</td>
      <td>Strict</td>
      <td>
        <ul>
        <li>🔵 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Style</td>
      <td>Style</td>
      <td>
        <ul>
          <li>🔸 = yes</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Rules

Enabled rules in config: ${rules.length}
`);
generateTable(rules);
