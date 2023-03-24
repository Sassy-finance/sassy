import {
  Button,
  Modal,
  styled,
  Container,
  Typography,
  Box,
  TextField,
  Grid
} from '@mui/material';

import { useContext, useState } from 'react';
import { User } from '../../../contexts';
import ClaimableNFT from '../../../artifacts/ClaimableNFT.json';
import { ethers } from 'ethers';

const ContentModal = styled(Container)(
  ({ theme }) => `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: ${theme.colors.alpha.trueWhite[100]};
          padding: ${theme.spacing(2)};
          border-radius: ${theme.spacing(1)};
          width: 50vw;
      `
);

const CenterContent = styled(Container)(
  () => `
          display: flex;
          flex-direction: column;
          align-items: center;
      `
);

const StyledBox = styled(Box)(
  () => `
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;
      `
);

interface MintNFTModalProps {
  open: boolean;
  handleClose: () => void;
  notionalValue: string;
  rateValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

function MintNFTModal({
  open,
  handleClose,
  notionalValue,
  rateValue,
  handleInputChange,
  handleSubmit
}: MintNFTModalProps) {

  const { signerObj } = useContext(User)
  const [state, setState] = useState({
    notional: '',
    rate: ''
  })

  const claimableNFT = new ethers.ContractFactory(
    ClaimableNFT.abi,
    ClaimableNFT.bytecode,
    signerObj
  );

  const claimableNFTInstace = claimableNFT.attach('0xE49D9dDaD8A2B1E68BedfB1A7f2Ea3AbF4e53552')

  const handleInputModalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });

    console.log({ state })
  };

  const mint = async () => {
    await claimableNFTInstace.connect(signerObj).safeMint(
      {
        notional: state['notional'],
        rate: state['rate']
      }
    )
  }


  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContentModal>
          <CenterContent>
            <StyledBox>
              <Typography variant="h3" textAlign="center" sx={{ mb: '1rem' }}>
                Mint NFT
              </Typography>
              <Grid container spacing={3} paddingRight="1rem">
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-search"
                    label="Notional"
                    type="search"
                    name="notional"
                    value={state['notional']}
                    onChange={handleInputModalChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-search"
                    label="Rate"
                    type="search"
                    name="rate"
                    value={state['rate']}
                    onChange={handleInputModalChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </StyledBox>
            <Button onClick={mint}>Mint</Button>
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default MintNFTModal;
