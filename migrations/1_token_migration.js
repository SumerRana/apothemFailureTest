const t1 = artifacts.require("MyToken");
const t2 = artifacts.require("MyToken2");
const t3 = artifacts.require("MyToken3");
const t4 = artifacts.require("MyToken4");


module.exports = async function (deployer) {
    deployer.deploy(t1)
    .then(() => deployer.deploy(t2))
    .then(() => deployer.deploy(t3))
    .then(() => deployer.deploy(t4));
}