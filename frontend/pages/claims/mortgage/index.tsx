import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Transactions/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';

import RecentClaims from '@/content/claims/mortgage/RecentClaims';

function MortgageTransactions() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg" style={{ marginBottom: '2rem' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentClaims />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

MortgageTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default MortgageTransactions;
