/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan"); 

const { API_KEY, API_URL, PRIVATE_KEY, MUMBAI_API_URL } = process.env;

module.exports = {
   solidity: "0.8.7",
   etherscan: {
      apiKey: API_KEY,
   },
   networks: {
      rinkeby: {
         url: API_URL,
         accounts: [PRIVATE_KEY]
      },
      mumbai: {
         url: MUMBAI_API_URL,
         accounts: [PRIVATE_KEY]
      }
   },
}
