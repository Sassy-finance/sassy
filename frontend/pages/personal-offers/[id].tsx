import RecentOffers from '@/content/personal-offers/detail/RecentOffers';
import SidebarLayout from '@/layouts/SidebarLayout';
import { useRouter } from 'next/router'
import { getPendingClaims } from '../../src/api/backend'

import { Grid, Container } from '@mui/material';

function PersonalOfferDetail() {

  const router = useRouter()
  const { id } = router.query

  console.log(id)


  const getData = async () => {
    const claims = await getPendingClaims()
    const claim = claims.find(claim => claim.id === id)
    console.log(claim)
  }


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
