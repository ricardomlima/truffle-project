// migrations/4_upgrade_box.js
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const UpgradeableBox = artifacts.require('UpgradeableBox');
const UpgradeableBoxV2 = artifacts.require('UpgradeableBoxV2');

module.exports = async function (deployer) {
  const existing = await UpgradeableBox.deployed();
  await upgradeProxy(existing.address, UpgradeableBoxV2, { deployer });
};