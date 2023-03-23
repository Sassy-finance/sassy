import { Box, CardContent, Typography, styled } from '@mui/material';
import { useState } from 'react';
import ShowQRModal from './ShowQRModal';

const CardTitle = styled(Typography)(
  () => `
    margin-top: 1rem;
    color: #da18a2;
    text-align: center;
  `
);

interface NFTsCardContentProps {
  name: string;
  value: string;
  amount: string;
}

function NFTsCardContent({ name, value, amount }: NFTsCardContentProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (): void => {
    console.log('handle');
    setOpenModal(true);
  };

  return (
    <>
      <CardContent onClick={() => handleOpenModal()}>
        <CardTitle variant="h3" noWrap sx={{ mb: 2 }}>
          {name}
        </CardTitle>
        <Box sx={{ pt: 3, px: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" noWrap>
              {`${value}`}
            </Typography>
            <Typography variant="subtitle2">Max Debt</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" noWrap>
              {`${amount}`}
            </Typography>
            <Typography variant="subtitle2">Minimum Balance</Typography>
          </Box>
        </Box>
      </CardContent>
      <ShowQRModal
        handleClose={() => {}}
        handleInputChange={() => {}}
        handleSubmit={() => {}}
        open={openModal}
        tier={name}
      />
    </>
  );
}

export default NFTsCardContent;
