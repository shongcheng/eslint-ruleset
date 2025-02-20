/**
 * Ruleset for airbnb, airbnb-typescript, airbnb/hooks
 */
import { loadESLint } from "eslint";
import airbnbConfig from "eslint-config-airbnb-base";
import airbnbTsConfig from "eslint-config-airbnb-typescript";
import airbnbHooksConfig from "eslint-config-airbnb/hooks";


const ESLint = await loadESLint({
  useFlatConfig: false,
});

const combinedConfig = {
  ...airbnbConfig,
  ...airbnbTsConfig,
  ...airbnbHooksConfig,
};

combinedConfig.extends = [
  ...airbnbConfig.extends,
  ...airbnbTsConfig.extends,
  ...airbnbHooksConfig.extends
];

const eslint = new ESLint({
  baseConfig: combinedConfig,
});


const config = await eslint.calculateConfigForFile('dummy.ts')

export default config;
