import { Typography, Grid } from '@mui/material';

const PageHeader = () => {

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Pending Claims
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are all pending claims to be validated
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
