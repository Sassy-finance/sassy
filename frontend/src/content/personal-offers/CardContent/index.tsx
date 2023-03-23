import { AvatarWrapper } from '@/styles/index.styles';
import { Box, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

interface OffersCardContentProps {
  name: string;
  symbol: string;
  logo: string;
  value: string;
  amount: string;
}

function OffersCardContent({
  name,
  symbol,
  logo,
  value,
  amount
}: OffersCardContentProps) {
  return (
    <>
      <CardContent>
        <AvatarWrapper>
          <img alt={name} src={logo} />
        </AvatarWrapper>
        <Typography variant="h5" noWrap>
          {name}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {symbol}
        </Typography>
        <Box sx={{ pt: 3 }}>
          <Typography variant="h3" gutterBottom noWrap>
            {value}
          </Typography>
          <Box>
            <Typography variant="subtitle2" noWrap style={{ display: 'flex', alignItems: 'center' }}>
              {amount}
              &nbsp;
              <Image
                src={'/borrowing-item.jpg'}
                alt="mortgage"
                width={26}
                height={26}
                style={{ borderRadius: '50%' }}
                unoptimized={true}  
              />
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </>
  );
}

export default OffersCardContent;
