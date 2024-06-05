const { getUniTVL } = require("../helper/unknownTokens");

module.exports = {
  misrepresentedTokens: true,
  sei: {
    tvl: getUniTVL({ useDefaultCoreAssets: true, factory: '0x71f6b49ae1558357bBb5A6074f1143c46cBcA03d' }),
  },
};
