const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const UpgradeableBox = artifacts.require('UpgradeableBox');

module.exports = async function (deployer) {
    await deployProxy(UpgradeableBox, [42], { deployer, initializer: 'store' });
}