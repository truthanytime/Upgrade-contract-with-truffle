// migrations/2_deploy_box.js
const box = artifacts.require('Box');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(box,[40], { deployer, initializer: 'constructor1' });
};