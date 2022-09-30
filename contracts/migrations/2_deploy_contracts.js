var tokenTest = artifacts.require("ERC721Contract");

module.exports = function(deployer) {
  deployer.deploy(ERC721Contract);
};
