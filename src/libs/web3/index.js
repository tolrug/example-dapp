import Network from './network.js'
import Account from './account.js'
import ERC20 from '../erc20/erc20';

// nested providers
export const Web3Provider = ({networkConfig, children}) => {
	return <Network.Provider config={networkConfig}>
		<Account.Provider>
			<ERC20.Provider>
				{children}
			</ERC20.Provider>	
		</Account.Provider>	
	</Network.Provider>
}

// public hooks
export const useNetwork = Network.useNetwork
export const useAccount = Account.useAccount