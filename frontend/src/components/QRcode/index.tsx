import { Container, styled } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

const QRContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '2rem',
    border: '1px solid gray',
    borderRadius: '1rem',
});

interface QRcodeProps {
  value: string;
}

function QRcode({ value }: QRcodeProps) {
  return (
    <>
      <QRContainer>
        <QRCodeSVG value={value} />
      </QRContainer>
    </>
  );
}

export default QRcode;
