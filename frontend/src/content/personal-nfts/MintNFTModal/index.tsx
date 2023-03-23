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
                    value={notionalValue}
                    onChange={handleInputChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-search"
                    label="Rate"
                    type="search"
                    name="rate"
                    value={rateValue}
                    onChange={handleInputChange}
                    style={{ width: '100%' }}
                  />
                </Grid>
              </Grid>
            </StyledBox>
            <Button onClick={handleSubmit}>Mint</Button>
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default MintNFTModal;
