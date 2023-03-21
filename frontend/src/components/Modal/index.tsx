import React from 'react';
import {
  Button,
  Modal,
  styled,
  Container,
  Typography,
  Box,
  TextField
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

interface SassyModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  subtitle?: string;
  inputLabel?: string;
  inputValue?: string;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: () => void;
  textBtn?: string;
}

function SassyModal({
  open,
  handleClose,
  title,
  subtitle,
  inputLabel,
  inputValue,
  handleInputChange,
  handleSubmit,
  textBtn
}: SassyModalProps) {
  const handleBtnClick = () => {
    handleClose();
    if (handleSubmit) handleSubmit();
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContentModal>
          <CenterContent>
            <StyledBox>
              {title && (
                <Typography variant="h3" textAlign="center" sx={{ mb: '1rem' }}>
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="subtitle2" textAlign="center">
                  {subtitle}
                </Typography>
              )}
              {inputLabel && handleInputChange && (
                <TextField
                  sx={{ mt: '1rem' }}
                  label={inputLabel}
                  variant="outlined"
                  fullWidth
                  onChange={handleInputChange}
                  value={inputValue}
                />
              )}
            </StyledBox>
            {textBtn && <Button onClick={handleBtnClick}>{textBtn}</Button>}
          </CenterContent>
        </ContentModal>
      </Modal>
    </>
  );
}

export default SassyModal;
