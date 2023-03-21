import { useContext } from 'react';
import { User } from '@/contexts';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

function HeaderConnectWallet() {
  const { loginMetamask } = useContext(User);
  return (
    <>
      <UserBoxButton onClick={loginMetamask}>
        Connect
      </UserBoxButton>
    </>
  );
}

export default HeaderConnectWallet;
