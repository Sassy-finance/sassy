import { useState } from 'react';

import { ethers } from 'ethers';

declare global {
    interface Window {
        ethereum?: any;
    }
}

const UserProvider = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [provider, setProvider] = useState<any>(undefined);
  const [signer, setSigner] = useState<any>();

  const loginMetamask = async () => {
    if (!window.ethereum) {
      alert(
        'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html'
      );
    } else {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = await (await provider.getSigner()).getAddress();
        setSigner(signer);
        setIsLogged(true);
      } catch (error) {
        alert('Please allow MetaMask to connect to this website.');
      }
    }
  };
};

export default UserProvider;
