import { Box, CardContent, Typography } from "@mui/material";

interface NFTsCardContentProps {
    name: string;
    amount: string;
}

function NFTsCardContent({name, amount}: NFTsCardContentProps) {
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
          {`Min Collateral: ${amount}`}
        </Typography>
      </Box>
    </CardContent>
  );
}

export default NFTsCardContent;
