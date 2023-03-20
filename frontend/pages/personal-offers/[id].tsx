import RecentOffers from '@/content/personal-offers/detail/RecentOffers';
import SidebarLayout from '@/layouts/SidebarLayout';

import { Grid, Container } from '@mui/material';

function PersonalOfferDetail() {
  return (
    <>
      <Container maxWidth="lg" style={{ margin: '2rem 0' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOffers />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

PersonalOfferDetail.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default PersonalOfferDetail;
