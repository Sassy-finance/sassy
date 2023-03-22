import SassyModal from '@/components/Modal';
import QRcode from '@/components/QRcode';
import {
  Button,
  Modal,
  styled,
  Container,
  Typography,
  Box,
  TextField
} from '@mui/material';

interface ShowQRModal {
  open: boolean;
  handleClose: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

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
        width: 400px;
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

const mockData = {
  "body": {
    "credentials": [
      {
        "description": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld#KYCAgeCredential",
        "id": "620575f3-c821-11ed-9aa2-0242ac180005"
      }
    ],
    "url": "https://api.dants.xyz/v1/agent"
  },
  "from": "did:polygonid:polygon:mumbai:2qPPaGmb6u6w8fkMPRXyUAKs69Ng4Tr4bjDirtV3QY",
  "id": "04378039-16f9-477a-a272-fce9c58e42ee",
  "thid": "04378039-16f9-477a-a272-fce9c58e42ee",
  "to": "did:polygonid:polygon:mumbai:2qGaWnwjeASE17q29YhrGe1Kan64PYUCwLLi3CQxPD",
  "typ": "application/iden3comm-plain-json",
  "type": "https://iden3-communication.io/credentials/1.0/offer"
}

function ShowQRModal({
  open,
  handleClose,
  handleInputChange,
}: ShowQRModal) {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContentModal>
          <CenterContent>
            <StyledBox>
              <Typography variant="h3" textAlign="center" sx={{ mb: '1rem' }}>
                {"Your Claim Offer"}
              </Typography>
            </StyledBox>
            <QRcode value={mockData} title={"QR"} />
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default ShowQRModal;
