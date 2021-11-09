// migrations/2_deploy_box.js
const box = artifacts.require('FansOnlyCoin');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(box, { deployer, initializer: 'constructor1' });
};