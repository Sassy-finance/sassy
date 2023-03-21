import React from 'react';
import {
  Button,
  Modal,
  styled,
  Container,
  Typography,
  Box
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

interface UploadDataModalProps {
    open: boolean;
    handleClose: () => void;
}

function UploadDataModal({ open, handleClose }: UploadDataModalProps) {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContentModal>
          <CenterContent>
            <StyledBox>
              <Typography variant="h3" textAlign="center" sx={{ mb: '1rem' }}>
                Your Data Vault has been created successfully!
              </Typography>
              <Typography variant="subtitle2" textAlign="center">
                You will receive notifications to accept the claims once the
                validators check your data.
              </Typography>
            </StyledBox>
            <Button onClick={handleClose}>OK</Button>
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default UploadDataModal;
