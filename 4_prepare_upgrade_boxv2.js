// migrations/4_prepare_upgrade_boxv2.js
const Box = artifacts.require('FansOnlyCoin');
const Box2 = artifacts.require('FansOnlyCoin2');
 
const { prepareUpgrade } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  const box = await Box.deployed();
  await prepareUpgrade(box.address, Box2, { deployer });
};