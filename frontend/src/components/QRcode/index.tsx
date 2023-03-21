import { Box, styled, Card, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

const QRCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'fit-content',
  width: '100%',
  borderRadius: '1rem',
  padding: '2rem',
  margin: '1rem',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
});

const TextBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem 0 2rem 0'
});

interface QRcodeProps {
  value: string;
  title?: string;
}

function QRcode({ value, title }: QRcodeProps) {
  return (
    <>
      <QRCard>
        {title && (
          <TextBox>
            <Typography
              variant="h3"
              overflow="visible"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>
          </TextBox>
        )}
        <QRCodeSVG value={value} />
      </QRCard>
    </>
  );
}

export default QRcode;
