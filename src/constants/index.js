import bigInt from "big-integer";

export const MORALIS_API_KEY =
  "2kHumt68e3WgGgwT82mkFVMMmlpfnf3Mzi7KWXWnyHrO8lJqpV5aZeAiFts3yYzM";
export const chain = "goerli"; // or 'bsc', 'polygon', etc.

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  XDAI: 100,
  BSC: 56,
  BSC_TESTNET: 97,
  ARBITRUM: 79377087078960,
  MOONBASE: 1287,
  AVALANCHE: 43114,
  FUJI: 43113,
  HECO: 128,
  HECO_TESTNET: 256,
  HARMONY: 1666600000,
  HARMONY_TESTNET: 1666700000,
};

export const contract_address = {
  [ChainId["MAINNET"]]: bigInt("fb80c9c4b2c1627643c2337553cd168089e0fa9e", 16),
  // [ ChainId['GOERLI'] ]: '0xe8c26D5c2a5496C7D4F385d6452Ef8cD2f152031',
  [ChainId["GOERLI"]]: bigInt("9C5C83564538abFbf4e3B6daB0b446EE4f278766", 16),
};

export const mainNetworkChainId = ChainId.MAINNET;
export const goerliNetworkChainId = ChainId.GOERLI;
