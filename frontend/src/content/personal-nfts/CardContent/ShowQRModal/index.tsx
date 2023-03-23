import QRcode from '@/components/QRcode';
import {
  Modal,
  styled,
  Container,
  Typography,
  Box,
} from '@mui/material';

interface ShowQRModal {
  open: boolean;
  handleClose: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  tier: string;
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
        width: 40vw;
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

const tierData = {
  "id": "7f38a193-0918-4a48-9fac-36adfdb8b542",
  "typ": "application/iden3comm-plain-json",
  "type": "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  "thid": "7f38a193-0918-4a48-9fac-36adfdb8b542",
  "body": {
    "reason": "Proof of funds request",
    "transaction_data": {
      "contract_address": "0x5FBd2d2deD32b125603fbE761da7554E3C47edC6",
      "method_id": "b68967e2",
      "chain_id": 80001,
      "network": "polygon-mumbai"
    },
    "scope": [
      {
        "id": 1,
        "circuitId": "credentialAtomicQuerySigV2OnChain",
        "query": {
          "allowedIssuers": [
            "*"
          ],
          "context": "https://raw.githubusercontent.com/Sassy-finance/sassy/main/backend/schema/proof-of-funds.jsonld",
          "credentialSubject": {
            "collateral": {
              "$gt": 500000
            }
          },
          "type": "ProofOfFunds"
        }
      }
    ]
  }
}

function ShowQRModal({
  open,
  handleClose,
  handleInputChange,
  tier
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
            <QRcode value={tierData} title={"QR"} />
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default ShowQRModal;
