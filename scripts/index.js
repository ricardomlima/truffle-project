// scripts/index.js
module.exports = async function main (callback) {
    try {
      // Set up a Truffle contract, representing our deployed Box instance
        const Box = artifacts.require('Box');
        const box = await Box.deployed();
        await box.store(42)
        const value = await box.retrieve();
        console.log('Box value is', value.toString());
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
  };