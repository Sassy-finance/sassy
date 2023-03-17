import {
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  Divider,
  styled
} from '@mui/material';

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);

function MyCards() {
  return (
    <Card>
      <CardHeader title="Create a new Claim" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h3" fontWeight="normal">
                  Mortgage
                </Typography>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h3" fontWeight="normal">
                  Inheritance
                </Typography>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h3" fontWeight="normal">
                  Tenant history
                </Typography>
              </Box>
            </CardCc>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
