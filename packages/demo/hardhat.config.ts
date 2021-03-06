import { HardhatUserConfig } from 'hardhat/types'

// Hardhat plugins
import '@nomiclabs/hardhat-ethers'
import '@chugsplash/plugins/dist/hardhat'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.13',
    settings: {
      outputSelection: {
        '*': {
          '*': ['storageLayout'],
        },
      },
    },
  },
}

export default config
