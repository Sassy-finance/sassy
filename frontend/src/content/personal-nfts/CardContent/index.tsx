import { Box, CardContent, Typography } from "@mui/material";

interface NFTsCardContentProps {
    name: string;
    amount: string;
    value: string;
}

function NFTsCardContent({name, amount, value}: NFTsCardContentProps) {
  return (
    <CardContent>
      <Typography variant="h3" noWrap marginTop={'1rem'}>
        {name}
      </Typography>
      <Box sx={{ pt: 3 }}>
        <Typography variant="subtitle2">
          {`Max Liabilities: ${amount}`}
        </Typography>
        <Typography variant="subtitle2">
          {`Min Collateral: ${value}`}
        </Typography>
      </Box>
    </CardContent>
  );
}

export default NFTsCardContent;
