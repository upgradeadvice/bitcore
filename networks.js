var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('04050504'),
  addressVersion: 0x0F,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('92facc7eccb95a82d819e4d45eb2e2f7c1741b0315e0206f7a0e656b0e070000'),
    merkle_root: hex('641362b5476e634e39989912c4452d17ddef9e19934646800e5eb68a1d3ccca2'),
    height: 0,
    nonce: 139785,
    version: 112,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1404668205,
    bits: 504365055,
  },
  dnsSeeds: [
    '104.131.125.97',
    '103.19.252.82',
    '178.62.247.76',
    '104.131.66.88'
  ],
  defaultClientPort: 29948
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 18333
};
