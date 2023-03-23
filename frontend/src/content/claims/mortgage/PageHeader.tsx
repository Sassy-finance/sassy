import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { FC } from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  getHistoricalTransactions?: () => {};
  uploadToIPFS: () => {};
}

const PageHeader: FC<PageHeaderProps> = ({ getHistoricalTransactions, uploadToIPFS }) => {

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={getHistoricalTransactions}
        >
          Load transaction history
        </Button>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={uploadToIPFS}
        >
          <Image src={'/filecoin-logo.png'} alt="filecoin" width={20} height={20} />
          &nbsp;
          Upload to Filecoin
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
