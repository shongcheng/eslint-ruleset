import { RulesConfig, RuleConfig } from "@eslint/core";

type MapEntry = {
  [configName: string]: RuleConfig;
};

class RulesDb {
  private configs: Record<string, RulesConfig>;
  public rules: Map<string, MapEntry>;

  constructor() {
    this.configs = {}
    this.rules = new Map()
  }
  public addConfig(config: RulesConfig, configName) {
    let i = 0
    this.configs[configName] = config
    Object.keys(config).forEach(name => {
      const shortenedName = name.replace('@typescript-eslint', '@ts');
      let entry = this.rules.get(shortenedName)
      if (entry === undefined) {
        entry = { }
        this.rules.set(shortenedName, entry)
      }
      entry[configName] = config[name]
      i++
    })
    console.info(`${configName}: ${i} rules added`)
  }
  getConfigs() {
    return this.configs
  }
  count() {
    return this.rules.size
  }
}

export default RulesDb;
