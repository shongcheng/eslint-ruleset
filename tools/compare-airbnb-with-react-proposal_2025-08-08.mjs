/**
 * Compare rules between rulesets
 */
import RulesDb from './RulesDb.mjs';
import { getEnabledRules, generateTable } from './rules.mjs'
import airbnb from './ruleset/airbnb.mjs'
import tsRecommended from './ruleset/react-proposal_2025-08-08.mjs'

const rulesDb = new RulesDb();

rulesDb.addConfig(getEnabledRules(airbnb.rules), 'airbnb-ts')
rulesDb.addConfig(getEnabledRules(tsRecommended.rules), 'ts-tc-rec')


console.log(`
## Ruleset Comparison

## \`airbnb-typescript\`

\`eslint-config-airbnb\`: \`19.0.4\`

\`eslint-config-airbnb-base\`: \`15.0.0\`

\`eslint-config-airbnb-typescript\`: \`18.0.0\`

\`\`\`
extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
]
\`\`\`

## \`ts-tc-rec\`

\`typescript-eslint\`: \`8.24.1\`

\`\`\`
tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
)
\`\`\`

## Table
`);

generateTable(rulesDb);
