import { AvatarWrapper } from '@/styles/index.styles';
import {
    Box,
    CardContent,
    Typography,
} from '@mui/material';

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
          <Typography variant="subtitle2" noWrap>
            {amount}
          </Typography>
        </Box>
      </CardContent>
    </>
  );
}

export default OffersCardContent;
