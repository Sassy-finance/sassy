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
  const data = {
    savedCards: 7
  };

  return (
    <Card>
      <CardHeader subheader={data.savedCards + ' saved cards'} title="Cards" />
      <Divider />
      <Box p={3}>
        <Box>
          <Typography variant="h2" fontWeight="normal">
            Create a new Claim
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    Mortgage
                  </Typography>
                </Box>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    Inheritance
                  </Typography>
                </Box>
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    Tenant history
                  </Typography>
                </Box>
              </Box>
            </CardCc>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
