// test/Box.test.js
// Load dependencies
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const Box = artifacts.require('Box');

// Start test block
contract('Box', function ([owner, other]) {

  // Use large integers ('big numbers')
  const value = new BN('42');

  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.box = await Box.new({ from: owner });
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.box.store(value,{ from: owner });

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    //   console.log(await this.box.retrieve().toString())
    expect((await this.box.retrieve()).toString()).to.be.bignumber.equal(value);
  });

  it('store emits an even', async function () {
    const receipt = await this.box.store(value, { from: owner });

    expectEvent(receipt, 'ValueChanged', { value: value });
  });

});