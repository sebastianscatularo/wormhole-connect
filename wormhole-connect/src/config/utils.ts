import { isEqualCaseInsensitive } from 'utils';
import { BridgeDefaults, NttGroups, TokensConfig, ChainsConfig } from './types';

const error = (msg: string) => {
  console.error(`Wormhole Connect: ${msg}`);
};

export const populateRpcField = (
  chainName: string,
  rpc: string | undefined,
) => {
  if (!rpc) return {};
  return { [chainName]: rpc };
};

/*
const info = (msg: string) => {
  console.info(`Wormhole Connect: ${msg}`);
};

export const validateResourceMap = (map: ChainResourceMap) => {
  if (!config || !config[field]) {
    info(
      `No custom ${field} endpoints provided. We recommended that you configure your own ${field} endpoints for the best performance.`,
    );
    return;
  }
  const defaultResourceMap = config.networkData[field];
  const resourceMap = config[field]!;
  const chains = Object.keys(config.chains) as ChainName[];
  for (const chain of chains) {
    if (resourceMap[chain] === defaultResourceMap[chain]) {
      info(
        `No custom ${field} endpoint provided for ${chain}. We recommended that you provide your own ${field} endpoint for the best performance.`,
      );
    }
  }
};
*/

/*
export const validateChainResources = () => {
  validateResourceMap('rpcs');
  validateResourceMap('rest');
};
*/

export const mergeCustomTokensConfig = (
  builtin: TokensConfig,
  custom?: TokensConfig,
): TokensConfig => {
  if (!custom) return builtin;

  const builtinTokens = Object.values(builtin);
  const builtinSymbols = builtinTokens.map((tk) => tk.symbol);
  const builtinKeys = builtinTokens.map((tk) => tk.key);

  for (const key in custom) {
    // Verify that custom token config does not conflict with any built-in tokens
    const customToken = custom[key];
    if (key in builtin) {
      console.warn(
        `Skipping custom token config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }
    if (builtinSymbols.includes(customToken.symbol)) {
      console.warn(
        `Skipping custom token config for "${key}" because its symbol "${customToken.symbol}" conflicts with a built-in`,
      );
      continue;
    }
    if (builtinKeys.includes(customToken.key)) {
      console.warn(
        `Skipping custom token config for "${key}" because its key "${customToken.key}" conflicts with a built-in`,
      );
      continue;
    }
    if (customToken.foreignAssets) {
      delete customToken.foreignAssets;
      console.warn(`Ignoring custom token config "${key}" foreignAssets`);
    }

    // Accept custom token config
    console.info(`Accepted custom token config for "${key}"`);
    builtin[key] = customToken;
  }

  return builtin;
};

export const mergeNttGroups = (
  tokens: TokensConfig,
  builtin: NttGroups,
  custom?: NttGroups,
) => {
  if (!custom) return builtin;

  for (const key in custom) {
    if (key in builtin) {
      console.warn(
        `Skipping custom NTT group config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }

    const customGroup = custom[key];
    // if any of the managers in the custom group exist in the built-in groups, skip
    if (
      customGroup.nttManagers.some((manager) =>
        Object.values(builtin).some((group) =>
          group.nttManagers.some((builtinManager) =>
            isEqualCaseInsensitive(builtinManager.address, manager.address),
          ),
        ),
      )
    ) {
      console.warn(
        `Skipping custom NTT group config for "${key}" because it conflicts with a built-in`,
      );
      continue;
    }

    // if any of the token keys in the custom group don't exist in the tokens config, skip
    if (customGroup.nttManagers.some((manager) => !tokens[manager.tokenKey])) {
      console.warn(
        `Skipping custom NTT group config for "${key}" because it references a token that does not exist`,
      );
      continue;
    }

    // if any of the chain names in the custom group are duplicated, skip
    if (
      new Set(customGroup.nttManagers.map((manager) => manager.chainName))
        .size !== customGroup.nttManagers.length
    ) {
      console.warn(
        `Skipping custom NTT group config for "${key}" because it contains duplicate chain names`,
      );
      continue;
    }

    console.info(`Accepted custom NTT group config for "${key}"`);
    builtin[key] = custom[key];
  }

  return builtin;
};

export const validateDefaults = (
  defaults: BridgeDefaults,
  chains: ChainsConfig,
  tokens: TokensConfig,
) => {
  if (!defaults) return;
  if (defaults.fromNetwork) {
    const chain = chains[defaults.fromNetwork];
    if (!chain) {
      error(
        `Invalid chain name "${defaults.fromNetwork}" specified for bridgeDefaults.fromNetwork`,
      );
      delete defaults.fromNetwork;
    }
  }
  if (defaults.toNetwork) {
    const chain = chains[defaults.toNetwork];
    if (!chain) {
      error(
        `Invalid chain name "${defaults.toNetwork}" specified for bridgeDefaults.toNetwork`,
      );
      delete defaults.fromNetwork;
    }
  }
  if (defaults.fromNetwork && defaults.toNetwork) {
    if (defaults.fromNetwork === defaults.toNetwork) {
      error(
        `Source and destination chain cannot be the same, check the bridgeDefaults configuration`,
      );
    }
  }

  if (defaults.fromNetwork && defaults.toNetwork && defaults.requiredNetwork) {
    const requiredConfig = chains[defaults.requiredNetwork];
    if (!requiredConfig) {
      error(
        `Invalid network value "${defaults.requiredNetwork}" specified for bridgeDefaults.requiredNetwork`,
      );
    }
    if (
      defaults.toNetwork !== defaults.requiredNetwork &&
      defaults.fromNetwork !== defaults.requiredNetwork
    ) {
      error(
        `Source chain or destination chain must equal the required network`,
      );
    }
  }

  if (defaults.token) {
    const tokenConfig = tokens[defaults.token];
    if (!tokenConfig) {
      error(
        `Invalid token "${defaults.token}" specified for bridgeDefaults.token`,
      );
      delete defaults.token;
    }
  }

  if (defaults.fromNetwork && defaults.token) {
    const chain = chains[defaults.fromNetwork]!;
    const { tokenId, nativeChain } = tokens[defaults.token]!;
    if (!tokenId && nativeChain !== chain.key) {
      error(
        `Invalid token "${defaults.token}" specified for bridgeDefaults.token. It does not exist on "${defaults.fromNetwork}"`,
      );
    }
  }
  return defaults;
};

/*
export const validateRoutes = () => {
  if (config.routes.length === 0) {
    error('You must enable at least 1 transfer route');
  }
};

export const validateConfigs = () => {
  validateRoutes();
  validateChainResources();
};
*/
